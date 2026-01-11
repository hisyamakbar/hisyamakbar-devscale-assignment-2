import { Hono } from "hono";
import { prisma } from "../utils/prisma.js";
import { zValidator } from "@hono/zod-validator";
import { createParticipantValidation } from "../validitaion/participant-validator.js";

export const participantsRoute = new Hono()
    .get("/", async (c) => {
        const participants = await prisma.participant.findMany();
        return c.json({ participants }, 200);
    })
    .get("/:id", async (c) => {
        const id = c.req.param("id");
        const participant = await prisma.participant.findUnique({
            where: { id }
        });
        return c.json({ participant }, 200)
    })
    .post("/", zValidator("json", createParticipantValidation), async (c) => {
        const body = c.req.valid("json")

        const newParticipant = await prisma.participant.create({
            data: {
                name: body.name,
                email: body.email,
                eventId: body.eventId,
            }
        })
        return c.json({ participant: newParticipant }, 201)
    })
    .patch('/:id', async (c) => {
        const id = c.req.param("id")
        const body = await c.req.json()

        const participant = await prisma.participant.update({
            where: {
                id: id,
            },
            data: {
                name: body.name,
                email: body.email,
                eventId: body.eventId,
            }
        })

        return c.json({ participant }, 200)
    })
    .delete("/:id", async (c) => {
        const id = c.req.param("id")

        await prisma.participant.delete({
            where: { id }
        })

        return c.json({
            message: `Participant deleted successfully`,
        }, 200)
    })