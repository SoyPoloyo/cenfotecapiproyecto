npx prisma migrate dev --name add_tipoCedula_enum

npx prisma migrate deploy
 npx prisma db pull  





 TipoCedula {
  Fisica : 1-2345-6789
  Juridica: 1-234-5678910
  DIMEX: 123456789101112
  NITE: 0000000000
  Extranjero: 00000000000000000000
}


Fisica: Tiene que tener 9 caracteres exactos (debe mostrar guiones que no se van a enviar a la db)
Juridica: Tiene que tener 10 caracteres exactos ( igual muestra guiones)
DIMEX: Tiene que tener 12 caracteres exactos
NITE: tiene que tener 10 exactos
Extranjero: Maximo 20 caracteres, no tiene minimo pero maximo 20