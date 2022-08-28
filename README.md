# APImeusCertficados

Essa API foi desenvolvida com o fim de ser consumida por páginas de currículo ou portfólio a fim de tornar dinâmico a exposição de certificados de cursos e proficiências.

O projeto foi desenvolvido em NodeJS usando o ExpressJS, MongoDB e o Mongoose, para fazer o servidor e o banco de dados. Ademais, foi usado como Design Pattern o Repository.

## Modelo de Dados:

Os registros possuem as seguintes propriedades:

- [x] titulo (string com máximo de 350 caracteres)
- [x] professor (string com máximo de 150 caracteres)
- [x] instituicao (string com máximo de 150 caracteres)
- [x] cargaHora (number)
- [x] aluno (string com máximo de 150 caracteres)
- [x] tag (uma Array)
- [] completed (boolean) - refere-se a se o curso está completo ou não. Default false
- [] completedAt (objeto Date) - refere-se a data em que o curso foi completo.
- [] createdAt (objeto Date) - refere-se a data da criação do registro
- [] updatedAt (objeto Date) - refere-se a data da atualização do registro

As propriedades marcadas são obrigatórias, as demais são facultativas.

## Os métodos da aplicação:

- requisição GET para resgatar todos os registros usando usando o end-point: "/certificados";
- requisição GET para resgatar um registro pelo seu id usando o end-point: "/certificados";
- requisição GET para resgatar registros pela pelo valor de suas tag: "/certificados/tag/:tag";
- requisição POST para cadastrar novos registros usando o end-point: "/certificados";
- requisição PATCH para atualizar registros por meio do id do registro: "/certificados/:id";
- requisição PUT para atualizar todos os dados do registro por meio do id do registro: "/certificados/:id";
- requisição DELETE para deletar um registro por meio do id do registro: "/certificados/:id";

## Como Usar:

Para a API funcionar ela precisa fazer a conexão a um banco de dados do MongoDB.

Neste projeto foi usada a ferramenta dotenv para simular variáveis de ambiente e enviar a URL de conexão do banco de dados do MongoDB.