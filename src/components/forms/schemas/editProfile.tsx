import { z } from "zod";

export const EditProfileSchema = z.object({
  firstName: z.string({
    required_error: "insira o seu primeiro nome",
  }),
  lastName: z.string({
    required_error: "insira o seu ultimo nome",
  }),
  // location: z.string({
  //   required_error: "insira a sua localização",
  // }),
  bio: z.string({
    required_error: "insira a sua descrição",
  }),
  expertise: z.string({
    required_error: "insira a sua expertise",
  }),
  photo: z.string({
    required_error: "insira a sua foto de perfil",
  }),
});
