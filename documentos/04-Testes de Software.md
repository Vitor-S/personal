# Planos de Testes de Software

Para montar um plano de testes para os requisitos funcionais (RF) listados anteriormente na seção de Especificação do Projeto, estruturamos os casos de teste de forma que cada funcionalidade seja verificada quanto ao comportamento esperado. Para fazer isso, dividimos o plano em seções de acordo com a prioridade de cada funcionalidade (ALTA, MÉDIA, BAIXA) e descrevemos os casos de teste com os passos necessários para validar cada requisito.

**Testes para Requisitos Funcionais de Alta Prioridade**

**RF-01 - Cadastrar conta de administrador**

**Objetivo:** Verificar se o administrador pode cadastrar sua conta.

**Cenário de Teste:**
Acessar o formulário de cadastro.
Preencher todos os campos obrigatórios (nome, e-mail, senha).
Submeter o formulário.

**Resultado Esperado:** A conta deve ser criada e o administrador redirecionado para a página principal.

**Evidência do Teste**

https://github.com/user-attachments/assets/bae8cede-9169-4d0a-bdf4-793b502cb386


**RF-02 - Cadastrar contas de alunos**

**Objetivo:** Verificar se o administrador pode cadastrar contas de alunos.

**Cenário de Teste:**
Acessar o sistema como administrador.
Ir à seção de cadastro de alunos.
Preencher os dados do aluno e submeter.

**Resultado Esperado:** Conta do aluno criada com sucesso.


**RF-03 - Excluir usuários cadastrados**

**Objetivo:** Verificar se o administrador pode excluir usuários.

**Cenário de Teste:**
Acessar a lista de usuários cadastrados.
Selecionar um usuário e clicar em "Excluir".

**Resultado Esperado:** O usuário deve ser removido do sistema.


**RF-04 - Visualizar e pesquisar alunos cadastrados**

**Objetivo:** Verificar se o administrador pode visualizar e pesquisar os alunos cadastrados.

**Cenário de Teste:**
Acessar a lista de alunos.
Usar a barra de pesquisa para buscar por nome, e-mail ou outro dado relevante.

**Resultado Esperado:** O aluno buscado deve aparecer na lista ou mensagem de “não encontrado”.


**RF-05 - Realizar login com e-mail e senha (admin e usuário)**

**Objetivo:** Verificar se tanto o administrador quanto o usuário conseguem realizar login.

**Cenário de Teste:**
Tentar fazer login com e-mail e senha corretos.
Tentar fazer login com e-mail ou senha incorretos.

**Resultado Esperado:** Login bem-sucedido redireciona o usuário à página correta. Login mal-sucedido deve mostrar mensagem de erro.


**RF-06 - Cadastro de treinos pelo administrador**

**Objetivo:** Verificar se o administrador pode cadastrar treinos.

**Cenário de Teste:**
Acessar o sistema como administrador.
Navegar até a seção de cadastro de treinos.
Preencher os campos de treino e salvar.

**Resultado Esperado:** O treino deve ser salvo e listado.


**RF-07 - Associar treino a um aluno**

**Objetivo:** Verificar se o administrador pode associar treinos aos alunos.

**Cenário de Teste:**
Selecionar um treino cadastrado.
Associar o treino a um aluno específico.

**Resultado Esperado:** O treino deve ser associado ao aluno.


**Testes para Requisitos Funcionais de Média Prioridade**

**RF-08 - Visualizar treinos cadastrados (admin e aluno)**

**Objetivo:** Verificar se o administrador e o aluno conseguem visualizar os treinos cadastrados.

**Cenário de Teste:**
Acessar a seção de treinos.
Verificar a lista de treinos disponíveis.

**Resultado Esperado:** A lista de treinos cadastrados deve ser exibida corretamente.


**RF-09 - Visualizar execução do exercício**

**Objetivo:** Verificar se o usuário pode visualizar a execução dos exercícios cadastrados.

**Cenário de Teste:**
Acessar um treino específico.
Visualizar a descrição ou vídeo de execução dos exercícios.

**Resultado Esperado:** A execução do exercício deve ser visualizada.


**RF-10 - Alterar ou excluir um treino**

**Objetivo:** Verificar se o administrador pode alterar ou excluir treinos.

**Cenário de Teste:**
Acessar um treino já cadastrado.
Editar ou excluir o treino.

**Resultado Esperado:** Treino deve ser atualizado ou excluído com sucesso.


**Testes para Requisitos Funcionais de Baixa Prioridade**

**RF-11 - Marcar treinos como realizados**

**Objetivo:** Verificar se o aluno pode marcar um treino como realizado.

**Cenário de Teste:**
Acessar a lista de treinos.
Marcar um treino como realizado.

**Resultado Esperado:** O treino deve ser marcado como realizado e atualizado.


**RF-12 - Registrar treino realizado no histórico**

**Objetivo:** Verificar se o treino marcado como realizado é registrado no histórico do aluno.

**Cenário de Teste:**
Após marcar um treino como realizado, verificar se ele aparece no histórico do aluno.

**Resultado Esperado:** O treino deve aparecer no histórico do aluno.


**RF-13 - Acessar histórico de sessões de treino**

**Objetivo:** Verificar se o usuário pode acessar o histórico de suas sessões de treino.

**Cenário de Teste:**
Acessar a seção de histórico de treinos.

**Resultado Esperado:** O histórico de sessões deve ser exibido.


**RF-14 - Acessar histórico de treinos de alunos**

**Objetivo:** Verificar se o administrador pode acessar o histórico de treinos dos alunos.

**Cenário de Teste:**
Acessar o perfil de um aluno.
Verificar o histórico de treinos.

**Resultado Esperado:** O histórico de treinos do aluno deve ser exibido corretamente.


**RF-15 - Atualizar informações pessoais**

**Objetivo:** Verificar se o usuário pode atualizar suas informações pessoais.

**Cenário de Teste:**
Acessar o perfil do usuário.
Atualizar informações como nome, foto, senha, etc.

**Resultado Esperado:** As informações pessoais devem ser atualizadas com sucesso.


**RF-16 - Logout da conta (admin e usuário)**

**Objetivo:** Verificar se o administrador e o usuário conseguem realizar logout.

**Cenário de Teste:**
Realizar logout após o uso do sistema.

**Resultado Esperado:** O usuário deve ser redirecionado para a página de login após o logout.

Este plano de testes cobre os requisitos funcionais propostos, com cenários que visam garantir que cada funcionalidade atenda ao seu propósito dentro do sistema.


# Testes por pares


Este documento tem como objetivo apresentar uma estratégia detalhada para a realização de testes que assegurem não apenas a funcionalidade, mas também a confiabilidade, desempenho e usabilidade do software desenvolvido.  

  
## Tipo de Teste

__Sucesso:__ Tem o objetivo de verificar se as funcionalidades funcionam corretamente.   

__Erro:__ Tem o objetivo de verificar se o sistema trata erros de maneira correta.  

<p align="center">
  
  <img width="1000" height="300" alt="Credenciais validas" src="https://github.com/user-attachments/assets/fba5df25-78a6-4bcb-b9d1-8e29f26ae068">

</p>

<p align="center">
  
  <img width="1000" height="300" alt="RF04G" src="https://github.com/user-attachments/assets/45db6d93-39de-47ef-8ef3-b8469968c989">

</p>


<p align="center">
      
<img width="1000" height="300" alt="RF06G" src="https://github.com/user-attachments/assets/acb6dfc3-c676-4ea6-9c25-4c22d1dd40f8">

</p>

<p align="center">
      
<img width="1000" height="300" alt="RF-07G" src="https://github.com/user-attachments/assets/b1104250-68bb-40a9-a1b7-44f3384fbde3">

</p>

<p align="center">
  
  <img width="1000" height="300" alt="RF-08G" src="https://github.com/user-attachments/assets/3d6de7f1-b984-4fb5-aa5c-4badb89f43c7">

</p>

<p align="center">

<img width="1000" height="300" alt="RF-09G" src="https://github.com/user-attachments/assets/7a3f63e7-86a7-4a4b-b829-4e95a78a0ca7">

</p>

<p align="center">
  
  <img width="1000" height="300" alt="RF16-Geral" src="https://github.com/user-attachments/assets/06887535-f6c9-460d-b532-e51281f4c601">

</p>

<p align="center">
      
<img width="1000" height="300" alt="TelaPrincipalRF17" src="https://github.com/user-attachments/assets/30e558d4-0ec7-47cb-96ae-1f7e6f6e3ca8">   

</p>

<p align="center">
      
<img width="1000" height="300" alt="TelaPrincipalRF18" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-2-e5-proj-empext-t4-pmv-ads-2024-2-e5-personalonline/blob/main/documentos/img/RF%2018.PNG">   

</p>

 
# Evidências de Testes de Software

Abaixo estão as evidências dos testes propostos no Plano de Testes, os registros foram registrados da aplicação em funcionamento nos dispositivos dos desenvolvedores do projeto.

## Status	

<p align="center">
  
 <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-2-e5-proj-empext-t4-pmv-ads-2024-2-e5-personalonline/blob/main/documentos/img/STATUS.PNG">
 
  </p>

## RF-01

<p align="center">

<img width="1000" height="300" alt="CadastraContaErro" src="https://github.com/user-attachments/assets/5b201742-433b-4417-80ed-705627cf92b6">

 </p>

 <p align="center">

![PostmanRegister](https://github.com/user-attachments/assets/676873ec-2a39-4fe0-a94f-fd06af3a1374)

 </p>

  <p align="center">

![VerificarErroRegister](https://github.com/user-attachments/assets/cea5ac9d-3e7a-43d9-b3c0-f40b6f852846)

  </p>

  ## Correção: Estava faltando password_confirm na função userRegister:

 <p align="center">

  ![Função Corrigida](https://github.com/user-attachments/assets/e9d70c2b-a039-43c1-877c-ef65ac3eff28)

  </p>

<p align="center">

<img width="1000" height="300" alt="ErroEmail" src="https://github.com/user-attachments/assets/edf5f778-415f-49a6-b852-ef833bb24f26">

 </p>
 
 <p align="center">  

![EmailInvalido](https://github.com/user-attachments/assets/dcef8882-3e19-49b7-a0ed-387ab76e320d)
 
 </p>

<p align="center">

  <img width="1000" height="300" alt="ErroEmailCadastrado" src="https://github.com/user-attachments/assets/77f58b36-2ddc-45a6-b9c8-7f1f78fd7d2c">

</p>

<p align="center">  

![EmailEmUso](https://github.com/user-attachments/assets/778faf19-ddfb-46eb-8af3-fc9d6a1b2290)
 
 </p>

<p align="center">

<img width="1000" height="300" alt="Errosenha" src="https://github.com/user-attachments/assets/04619f28-acc0-4544-9ad6-de4f9e3f8bb3">

</p>

<p align="center">  

![ErroConfSenha](https://github.com/user-attachments/assets/7ece295e-34b5-428b-9393-071392a49c04)
 
 </p>

## RF-04

<p align="center">
  
<img  width="1000" height="300" alt="RF04s" src="https://github.com/user-attachments/assets/759bd779-ce73-4744-be53-d2c32c993ff4">
 
 </p>

 <p align="center">
   

![Login](https://github.com/user-attachments/assets/faed9c96-00ef-4f2c-8687-3a4e8e7911ed)
  
</p>


 <p align="center">
   
![LoginAdmin](https://github.com/user-attachments/assets/d041fa12-a710-4d29-a921-148c98588d55)
  
</p>

## RF-06

<p align="center">

  
<img width="1000" height="300" alt="RF-06 01" src="https://github.com/user-attachments/assets/49f682e7-414d-4b40-81de-d3fc89783ccb">
 
 </p>


<p align="center">

  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-2-e5-proj-empext-t4-pmv-ads-2024-2-e5-personalonline/blob/main/documentos/img/EVIDENCIA%20TELA.jpeg" width="350">

</p>

<p align="center">

![WhatsApp Image 2024-11-24 at 23 22 04](https://github.com/user-attachments/assets/f01ac2e2-ef1c-43f2-81e9-364a567e4634)

</p>


  <p align="center">
  
<img width="1000" height="300" alt="RF-06 02" src="https://github.com/user-attachments/assets/24016a63-ab5d-49b6-82c3-3bb35ddb158c">

 </p>

<p align="center">
  
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-2-e5-proj-empext-t4-pmv-ads-2024-2-e5-personalonline/blob/main/documentos/img/RF%2011117.png" width="350">

</p>

<p align="center">
      
<img width="1000" height="300" alt="RF-06 03" src="https://github.com/user-attachments/assets/9f63ec87-d354-42e1-b3d3-36393691e03c">

</p>

 <p align="center">

   <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-2-e5-proj-empext-t4-pmv-ads-2024-2-e5-personalonline/blob/main/documentos/img/RF%201117.png" width="350">

</p>

## RF-07

<p align="center">
      
<img width="1000" height="300" alt="RF-07E" src="https://github.com/user-attachments/assets/3d439948-306e-491c-9c42-7a9c0b22e4f0">

</p>

<p align="center">

https://github.com/user-attachments/assets/21fa18a3-8117-44dd-bee5-f0568be937cd

</p>

## RF-08

<p align="center">

<img width="1000" height="300" alt="RF-08E" src="https://github.com/user-attachments/assets/26ed26d6-4f86-4bc9-8ce3-2ef37e20c06c">

</p>

<p align="center">

https://github.com/user-attachments/assets/dbf05e92-132d-4402-a428-b40f69255d13

</p>


## RF-16

<p align="center">
      

<img width="1000" height="300" alt="RF16-Senha" src="https://github.com/user-attachments/assets/17c8f286-b23d-4761-b499-ad75383f4a29">

</p>

<p align="center">
      
![imagem (1)](https://github.com/user-attachments/assets/a209cdab-ba35-4fa1-8498-c6c762946f8b)

</p>

## RF - 17

<p align="center">
      
  <img width="1000" height="300" alt="RF17-02" src="https://github.com/user-attachments/assets/621927a9-651b-4ac3-938f-68f13e997f98">

</p>   

<p align="center">
      
[  <img width="1000" height="300" alt="RF17-02" src="https://github.com/user-attachments/assets/621927a9-651b-4ac3-938f-68f13e997f98">](https://github.com/user-attachments/assets/61cdd76f-6461-48dd-86be-305c91b56a97)

</p>  

<p align="center">
      
[  <img width="1000" height="300" alt="RF17-02" src="https://github.com/user-attachments/assets/621927a9-651b-4ac3-938f-68f13e997f98">](https://github.com/user-attachments/assets/61cdd76f-6461-48dd-86be-305c91b56a97)

</p>  

## RF - 18

<p align="center">
      
  <img width="1000" height="300" alt="RF18" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-2-e5-proj-empext-t4-pmv-ads-2024-2-e5-personalonline/blob/main/documentos/img/RF%201888.PNG">

</p>   

<p align="center">
      
  <img width="350" alt="RF18" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-2-e5-proj-empext-t4-pmv-ads-2024-2-e5-personalonline/blob/main/documentos/img/RF%2011117.png">

</p>   

<p align="center">
      
  <img  width="350" alt="RF18" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-2-e5-proj-empext-t4-pmv-ads-2024-2-e5-personalonline/blob/main/documentos/img/RF%201117.png">

</p>  



 **Cadastro Login testes**
- [Vídeo Teste de Cadastro e Login](https://github.com/user-attachments/assets/42f501f0-37cf-479e-8856-d47e3a2f57cc).
- [Campos vazios](https://github.com/user-attachments/assets/0a2efb91-4520-405a-b772-0d037def5c25)
- [Usuário não encontrado](https://github.com/user-attachments/assets/5729fe8b-d8b8-419b-b4bc-71d9e72f6148)
- [Senha ou usuário incorreto](https://github.com/user-attachments/assets/ce8a9d34-2dc8-4244-b42b-80fd4a9678a5)
  # LOG ERROS/SUCESSO
- [Erros ccadastrais](https://github.com/user-attachments/assets/5c20c4e8-f8d4-4951-86cf-69fd04797461)


  
