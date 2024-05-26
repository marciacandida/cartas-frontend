import { z } from "zod";

export const EditProfileSchema = z.object({
  firstName: z.string({
    required_error: "Insira o seu primeiro nome",
  }),
  lastName: z.string({
    required_error: "Insira o seu ultimo nome",
  }),
  // location: z.string({
  //   required_error: "insira a sua localização",
  // }),
  bio: z.string({
    required_error: "Insira a sua descrição",
  }),
  expertise: z.string({
    required_error: "Insira a sua expertise",
  }),
  photo: z.string({
    required_error: "Insira a sua foto de perfil",
  }),
});
