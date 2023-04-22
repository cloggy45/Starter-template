import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "@server/api/trpc";

export const userRouter = createTRPCRouter({
  getProfile: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { prisma } = ctx;

      return await prisma.user.findFirst({
        where: {
          id: input.id,
        },
        select: {
          email: true,
          image: true,
        },
      });
    }),
  deleteUser: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { prisma } = ctx;

      const accountId = await prisma.account
        .findFirst({
          where: {
            userId: input.id,
          },
          select: {
            id: true,
          },
        })
        .then((result) => result?.id);

      if (!accountId) {
        throw new Error("Could not find account");
      }

      await prisma.account.delete({
        where: {
          id: accountId,
        },
      });

      await prisma.user.delete({
        where: {
          id: input.id,
        },
      });
    }),

  subscriptionStatus: protectedProcedure.query(async ({ ctx }) => {
    const { session, prisma } = ctx;

    if (!session.user?.id) {
      throw new Error("Not authenticated");
    }

    const data = await prisma.user.findUnique({
      where: {
        id: session.user?.id,
      },
      select: {
        stripeSubscriptionStatus: true,
      },
    });

    if (!data) {
      throw new Error("Could not find user");
    }

    return data.stripeSubscriptionStatus;
  }),
});
