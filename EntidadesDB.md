# Banco de dados - Pipoca Ágil Podcast

1. **Usuários:**

   - Armazenará informações sobre os usuários registrados, como nome, endereço de e-mail, número de telefone, data de nascimento e credenciais de login (nome de usuário e senha).

2. **Fotos:**

   - Cada registro representará uma foto na galeria.
   - Campos incluirão título, data, descrição, créditos do fotógrafo e a própria imagem (em formato binário ou URL).

3. **Eventos:**

   - Cada registro representará um evento na galeria.
   - Campos incluirão título, data, localização, descrição e uma lista de participantes (possivelmente relacionados a entidades de usuários).

4. **Episódios:**

   - Cada registro representará um episódio de uma série ou programa.
   - Campos incluirão título, sinopse, data de lançamento, duração e informações relacionadas ao vídeo (URL, ID de incorporação ou caminho do arquivo).

5. **Assinantes:**

   - Armazenará informações sobre os membros do clube de assinantes, como data de adesão, status de assinatura atual e detalhes de pagamento.

6. **Avaliações, compartilhamentos e Comentários**

   - Se você planeja permitir que os usuários avaliem e comentem sobre fotos, eventos ou episódios, considere entidades separadas para registrar essas interações.

7. **Logs de Administração:**

   - Armazenará registros de atividades de administração, como adições, edições e exclusões de conteúdo por administradores.

8. **Dados de Análise e Estatísticas:**

   - Se você planeja coletar dados de análise e estatísticas, considere como esses dados serão estruturados no banco de dados para proteger os dados do usuário. Além disso, mantenha a documentação do banco de dados atualizada à medida que você projeta e implementa o esquema do banco de dados.

9. **Redes Sociais:**

- Cada registro representará um perfil de rede social associado a um usuário ou palestrante.
- Campos incluirão o tipo de rede social (por exemplo, Facebook, Twitter, LinkedIn, Instagram), o nome de usuário ou URL do perfil e um relacionamento com a entidade de Usuários ou Palestrantes para indicar a associação.

11. **Palestrantes:**

- Cada registro representará um palestrante que pode estar associado a eventos.
- Campos incluirão nome, biografia, foto do palestrante (em formato binário ou URL), informações de contato (por exemplo, endereço de e-mail, número de telefone) e uma lista de eventos em que o palestrante está envolvido.

12. **Administradores:**

- Cada registro representará um administrador do sistema.
- Campos incluirão nome, endereço de e-mail, credenciais de login (nome de usuário e senha) e informações adicionais, como data de contratação e cargo.

## Administrador

1. **ID:** Um identificador único para cada administrador no sistema. Isso pode ser usado como chave primária no banco de dados.

2. **Nome Completo:** O nome completo do administrador para fins de identificação.

3. **Nome de Usuário:** Um nome de usuário exclusivo que o administrador usará para fazer login no sistema, se aplicável.

4. **Endereço de E-mail:** O endereço de e-mail do administrador, que também pode ser usado como identificador exclusivo.

5. **Senha:** Uma senha segura e criptografada que permite ao administrador fazer login no sistema. A senha deve ser armazenada com segurança no banco de dados.

6. **Cargo:** O cargo ou função do administrador, como "Super Administrador" ou "Administrador de Conteúdo".

7. **Data de Registro:** A data e hora em que o administrador foi registrado no sistema.

8. **Último Acesso:** A data e hora do último acesso bem-sucedido do administrador ao sistema.

9. **Ativo/Inativo:** Um indicador que pode ser usado para ativar ou desativar temporariamente o acesso do administrador ao sistema.

10. **Permissões:** Uma lista de permissões que define quais ações o administrador pode realizar no sistema. Isso pode incluir permissões para gerenciar conteúdo, visualizar análises, moderar conteúdo enviado por usuários, etc.

11. **Foto de Perfil:** Uma imagem que representa o administrador. Isso é opcional, mas pode ser útil para identificação visual.

12. **Histórico de Atividades:** Um registro das atividades do administrador, como alterações feitas no conteúdo, aprovações de conteúdo enviado por usuários e outras ações importantes.

13. **Informações de Contato:** Informações de contato adicionais, como número de telefone ou endereço, se necessário.

14. **Notificações:** Preferências de notificação para o administrador, como receber alertas por e-mail sobre atividades importantes no sistema.

15. **Configurações de Conta:** Configurações personalizadas para a conta do administrador, como preferências de idioma, temas, entre outros.

## Usuário

1. **ID:** Um identificador único para cada usuário no sistema. Isso pode ser usado como chave primária no banco de dados.

2. **Nome Completo:** O nome completo do usuário para fins de identificação.

3. **Nome de Usuário:** Um nome de usuário exclusivo que o usuário usará para fazer login no sistema, se aplicável.

4. **Endereço de E-mail:** O endereço de e-mail do usuário, que também pode ser usado como identificador exclusivo.

5. **Senha:** Uma senha segura e criptografada que permite ao usuário fazer login no sistema. A senha deve ser armazenada com segurança no banco de dados.

6. **Data de Registro:** A data e hora em que o usuário foi registrado no sistema.

7. **Último Acesso:** A data e hora do último acesso bem-sucedido do usuário ao sistema.

8. **Ativo/Inativo:** Um indicador que pode ser usado para ativar ou desativar temporariamente o acesso do usuário ao sistema.

9. **Permissões:** Uma lista de permissões que define quais ações o usuário pode realizar no sistema. Isso pode incluir permissões para visualizar conteúdo, postar comentários, enviar conteúdo, interagir com outros usuários, entre outras.

10. **Foto de Perfil:** Uma imagem que representa o usuário. Isso é opcional, mas pode ser útil para identificação visual.

11. **Histórico de Atividades:** Um registro das atividades do usuário, como postagens, comentários, interações e outras ações importantes.

12. **Informações de Contato:** Informações de contato adicionais, como número de telefone, endereço ou redes sociais, se necessário.

13. **Notificações:** Preferências de notificação para o usuário, como receber alertas por e-mail sobre atividades importantes no sistema.

## Fotos

1. **ID:** Um identificador único para cada foto no sistema. Isso pode ser usado como chave primária no banco de dados.

2. **Título:** Um título descritivo para a foto, que ajuda a identificar o conteúdo ou contexto da imagem.

3. **Descrição:** Uma descrição mais detalhada da foto, que fornece informações adicionais sobre o que está acontecendo na imagem.

4. **Data de Upload:** A data e hora em que a foto foi carregada no sistema.

5. **Autor:** A referência ao usuário que carregou a foto. Isso permite rastrear quem fez o upload da imagem.

6. **Categoria:** A categoria à qual a foto pertence. Isso pode incluir categorias como "Eventos", "Episódios" ou outras categorias relevantes.

7. **Localização:** Se aplicável, a localização geográfica onde a foto foi tirada.

8. **Créditos do Fotógrafo:** Informações sobre o fotógrafo responsável pela imagem, se disponíveis.

9. **URL da Imagem:** O local onde a imagem é armazenada ou um URL que permite o acesso à imagem.

10. **Tags ou Palavras-Chave:** Palavras-chave ou tags associadas à foto, que facilitam a pesquisa e a organização.

11. **Visibilidade:** Uma indicação da visibilidade da foto, que pode ser "Pública" (visível para todos os usuários), "Privada" (visível apenas para o autor) ou outra configuração de privacidade.

12. **Comentários:** Uma lista de comentários feitos pelos usuários sobre a foto.

13. **Favoritos:** Uma lista de usuários que marcaram a foto como favorita.

14. **Ações Sociais:** Métricas de compartilhamento e engajamento social, como curtidas, compartilhamentos e visualizações.

15. **Relacionamentos:** Associações opcionais com outros recursos, como eventos, episódios, álbuns ou séries.

16. **Status de Aprovação:** Se a plataforma requer moderação de conteúdo, um campo que indica se a foto foi aprovada ou precisa de revisão.

17. **Exclusão:** Um campo que indica se a foto foi excluída permanentemente do sistema ou está marcada como excluída, mas ainda mantida no banco de dados.

18. **Resolução e Tamanho da Imagem:** Informações técnicas sobre a imagem, como resolução, tamanho do arquivo e formato.

19. **Downloads:** Um contador que registra quantas vezes a imagem foi baixada, se aplicável.

20. **Direitos Autorais:** Informações sobre direitos autorais e licenciamento da imagem, se relevante.

## Eventos

1. **ID:** Um identificador único para cada evento no sistema. Isso pode ser usado como chave primária no banco de dados.

2. **Título:** Um título descritivo para o evento, que ajuda a identificar o conteúdo ou nome do evento.

3. **Descrição:** Uma descrição mais detalhada do evento, que fornece informações adicionais sobre o que acontecerá durante o evento.

4. **Data e Hora:** A data e a hora em que o evento ocorrerá. Isso pode incluir informações de data de início e término.

5. **Localização:** A localização física onde o evento será realizado. Isso pode incluir informações como nome do local, endereço e coordenadas geográficas.

6. **Participantes:** Uma lista de participantes ou palestrantes que estarão envolvidos no evento.

7. **Categoria:** A categoria à qual o evento pertence. Isso pode incluir categorias como "Conferências", "Workshops", "Apresentações" etc.

8. **Foto de Capa:** Uma imagem representativa ou foto de capa para o evento que é exibida ao promover o evento.

9. **URL do Evento:** Um link para uma página ou site dedicado ao evento, se aplicável.

10. **Ingressos e Preços:** Informações sobre ingressos, preços e disponibilidade, se o evento requer registro ou compra de ingressos.

11. **Status:** O status do evento, que pode ser "Agendado", "Cancelado", "Concluído" ou outros estados relevantes.

12. **Comentários:** Uma lista de comentários feitos pelos usuários sobre o evento.

13. **Favoritos:** Uma lista de usuários que marcaram o evento como favorito.

14. **Ações Sociais:** Métricas de compartilhamento e engajamento social relacionadas ao evento, como curtidas, compartilhamentos e visualizações.

15. **Recursos Relacionados:** Associações opcionais com outros recursos, como fotos, vídeos ou episódios relacionados ao evento.

16. **Status de Aprovação:** Se a plataforma requer moderação de conteúdo, um campo que indica se o evento foi aprovado ou precisa de revisão.

17. **Exclusão:** Um campo que indica se o evento foi excluído permanentemente do sistema ou está marcado como excluído, mas ainda mantido no banco de dados.

## Episódios

1. **ID:** Um identificador único para cada episódio no sistema. Isso pode ser usado como chave primária no banco de dados.

2. **Título:** Um título descritivo para o episódio que ajuda a identificar o conteúdo ou nome do episódio.

3. **Sinopse:** Uma breve descrição do episódio, fornecendo informações sobre o seu conteúdo ou resumo.

4. **Data de Lançamento:** A data em que o episódio foi lançado ou estará disponível para visualização.

5. **Duração:** A duração total do episódio, indicando quanto tempo levará para assisti-lo.

6. **URL do Vídeo:** Um link para o vídeo do episódio, que pode estar hospedado em um servidor externo, como o YouTube, ou armazenado localmente no sistema.

7. **Categoria:** A categoria à qual o episódio pertence. Isso pode incluir categorias como "Séries de TV", "Podcasts", "Vídeos Instrucionais", etc.

8. **Série Relacionada:** Se o episódio faz parte de uma série maior, você pode vinculá-lo à série correspondente.

9. **Foto de Capa:** Uma imagem representativa ou foto de capa para o episódio que é exibida ao promover o episódio.

10. **Atores ou Participantes:** Uma lista de atores, apresentadores ou participantes que estão envolvidos no episódio.

11. **Comentários:** Uma lista de comentários feitos pelos usuários sobre o episódio.

12. **Avaliação:** Uma classificação ou avaliação média atribuída pelos usuários ao episódio.

13. **Favoritos:** Uma lista de usuários que marcaram o episódio como favorito.

14. **Visualizações:** O número de vezes que o episódio foi visualizado ou reproduzido.

15. **Status:** O status do episódio, que pode ser "Publicado", "Programado", "Rascunho", "Privado" ou outros estados relevantes.

16. **Recursos Relacionados:** Associações opcionais com outros recursos, como fotos ou eventos relacionados ao episódio.

17. **Status de Aprovação:** Se a plataforma requer moderação de conteúdo, um campo que indica se o episódio foi aprovado ou precisa de revisão.

18. **Exclusão:** Um campo que indica se o episódio foi excluído permanentemente do sistema ou está marcado como excluído, mas ainda mantido no banco de dados.

19. **Legenda ou Legendas:** Se aplicável, informações sobre legendas ou opções de idioma para o episódio.

## Assinantes

1. **ID:** Um identificador único para cada assinante no sistema, geralmente usado como chave primária no banco de dados.

2. **Nome Completo:** O nome completo do assinante, que pode ser dividido em "primeiro nome" e "sobrenome" para facilitar o manuseio.

3. **Endereço de E-mail:** O endereço de e-mail exclusivo associado ao assinante, usado para fins de comunicação e login.

4. **Senha:** A senha segura associada à conta do assinante. Certifique-se de armazenar senhas de forma segura, usando técnicas de hash e salting.

5. **Número de Telefone:** O número de telefone do assinante, que pode ser usado para fins de contato ou autenticação adicional.

6. **Data de Registro:** A data em que o assinante se registrou no sistema.

7. **Status de Assinatura:** O status atual da assinatura, que pode ser "Ativa", "Pendente", "Expirada" ou outros estados relevantes.

8. **Data de Vencimento da Assinatura:** A data em que a assinatura atual do assinante expira ou é renovada.

9. **Método de Pagamento:** As informações do método de pagamento associado à assinatura do assinante, como número de cartão de crédito, data de validade, etc. Certifique-se de lidar com informações de pagamento de forma segura e compatível com regulamentações.

10. **Histórico de Pagamentos:** Um registro das transações de pagamento associadas à conta do assinante.

11. **Benefícios da Assinatura:** Uma lista dos benefícios ou recursos exclusivos disponíveis para o assinante devido à sua assinatura.

12. **Tipo de Assinatura:** Se houver vários níveis de assinatura (por exemplo, "Básico", "Premium", "VIP"), registre o tipo de assinatura do assinante.

13. **Informações de Cobrança:** Se o sistema permitir que os assinantes atualizem suas informações de cobrança, inclua campos relevantes, como endereço de cobrança.

14. **Fotos Favoritas:** Se os assinantes puderem marcar fotos ou outros conteúdos como favoritos, registre essas associações.

15. **Episódios Favoritos:** Se aplicável, registre os episódios marcados como favoritos pelo assinante.

16. **Histórico de Acesso:** Registre as ações e atividades do assinante, como login, visualizações e interações.

17. **Opções de Privacidade:** Permita que os assinantes controlem suas configurações de privacidade, como quem pode ver seu perfil ou atividades.

18. **Comunicações por E-mail:** As preferências do assinante em relação a comunicações por e-mail, como newsletters e atualizações.

19. **Permissões de Acesso:** Controle as permissões de acesso do assinante com base em seu tipo de assinatura ou função.

20. **Token de Autenticação:** Um token de autenticação seguro usado para autenticar solicitações do cliente em nome do assinante, geralmente usado em APIs RESTful.

## Compartilhamento

1. **ID:** Um identificador único para cada compartilhamento no sistema, geralmente usado como chave primária no banco de dados.

2. **Tipo de Conteúdo:** Indique o tipo de conteúdo que está sendo compartilhado. Pode ser "Foto", "Evento", "Episódio" ou qualquer outro tipo relevante.

3. **ID do Conteúdo:** O identificador único do conteúdo específico que está sendo compartilhado. Isso pode ser o ID da foto, evento ou episódio.

4. **ID do Usuário:** O identificador único do usuário que está compartilhando o conteúdo.

5. **Data e Hora do Compartilhamento:** Registre quando o compartilhamento ocorreu para fins de registro e ordenação.

6. **Plataforma de Compartilhamento:** O canal ou plataforma onde o conteúdo está sendo compartilhado, como Facebook, Twitter, WhatsApp, e-mail, etc.

7. **URL do Compartilhamento:** A URL específica que leva diretamente ao conteúdo compartilhado.

8. **Mensagem de Compartilhamento:** Uma mensagem opcional adicionada pelo usuário ao compartilhar o conteúdo.

9. **Contador de Visualizações:** Registre o número de visualizações ou cliques no link de compartilhamento, se aplicável.

10. **Contador de Comentários e Curtidas:** Se houver interações sociais no compartilhamento, como comentários e curtidas, registre essas informações.

11. **Permissões de Acesso:** Controle quem pode ver o compartilhamento. Pode ser "Público" (todos podem ver) ou "Privado" (somente pessoas autorizadas).

12. **Duração do Compartilhamento:** Se aplicável, registre por quanto tempo o compartilhamento será válido.

13. **Status do Compartilhamento:** Indique se o compartilhamento ainda está ativo ou se expirou.

14. **Contador de Cliques:** Acompanhe quantas vezes o link de compartilhamento foi clicado.

15. **Informações do Compartilhador:** Registre informações sobre a pessoa que compartilhou o conteúdo, como nome, foto de perfil, etc.

16. **Opções de Privacidade:** Permita que os usuários controlem as configurações de privacidade de seus compartilhamentos.

17. **Token de Autenticação:** Um token de autenticação seguro usado para verificar a autenticidade das solicitações de compartilhamento.

## Atividades (Curtida, compartilhamento e comentário)

**1. ID da Atividade (Activity ID):**

- Tipo: Identificador Único
- Descrição: Um identificador único para cada atividade registrada. Isso permite que você se refira a uma atividade específica em seu sistema.

**2. Tipo de Atividade (Activity Type):**

- Tipo: String (ou Enum, dependendo da linguagem)
- Descrição: Indica o tipo de ação realizada, como "Curtir", "Compartilhar", "Comentar" etc.

**3. Autor da Atividade (Activity Author):**

- Tipo: Referência ao Usuário
- Descrição: O usuário que realizou a ação. Isso permite rastrear quem está interagindo com o conteúdo.

**4. Alvo da Atividade (Activity Target):**

- Tipo: Referência ao Item
- Descrição: O item ao qual a ação está relacionada. Isso pode ser um evento, episódio, comentário, artigo ou qualquer outra entidade em seu sistema.

**5. Data e Hora da Atividade (Activity Timestamp):**

- Tipo: Data e Hora
- Descrição: O momento em que a atividade foi realizada. Isso ajuda a registrar quando uma ação ocorreu.

**6. Dados Adicionais (Additional Data):**

- Tipo: JSON (ou outro formato de dados estruturados)
- Descrição: Um campo flexível que pode conter dados adicionais relacionados à atividade. Isso pode incluir informações como o texto do comentário, informações de compartilhamento, etc., dependendo do tipo de atividade.

**7. Visibilidade (Visibility):**

- Tipo: String (ou Enum)
- Descrição: A visibilidade da atividade, que pode ser "Pública", "Somente para Amigos", "Privada" ou outras opções que você desejar oferecer aos usuários para controlar quem pode ver suas atividades.

**8. Ações do Usuário (User Actions):**

- Tipo: Referência ao Usuário
- Descrição: Uma lista de usuários que realizaram ações específicas em relação a essa atividade. Isso pode incluir usuários que curtiram a atividade, compartilharam-na, comentaram, etc.

**9. Contagem de Ações (Action Count):**

- Tipo: Inteiro
- Descrição: O número total de ações realizadas em relação a essa atividade. Isso pode incluir contagens separadas para curtidas, compartilhamentos, comentários, etc.

**10. Notificações (Notifications):**

- Tipo: Referência às Notificações
- Descrição: As notificações relacionadas a essa atividade. Isso permite que você notifique os autores dos itens ou outros usuários sobre a atividade.

**11. Tags (Tags):**

- Tipo: Lista de Strings
- Descrição: Tags ou categorias associadas a essa atividade, que podem facilitar a organização e a pesquisa de atividades relacionadas.

## Logs de Administração

**1. ID do Log (Log ID):**

- Tipo: Identificador Único (por exemplo, UUID)
- Descrição: Um identificador único para cada entrada de log, permitindo referenciar logs específicos.

**2. Data e Hora do Log (Log Timestamp):**

- Tipo: Data e Hora
- Descrição: O momento em que a ação de administração foi registrada.

**3. Usuário Responsável (Responsible User):**

- Tipo: Referência ao Usuário
- Descrição: O usuário administrador responsável pela ação. Isso permite rastrear quem realizou a ação de administração.

**4. Tipo de Ação (Action Type):**

- Tipo: String (ou Enum)
- Descrição: O tipo de ação de administração realizada, como "Criar", "Editar", "Excluir", "Aprovar", "Rejeitar", etc.

**5. Descrição da Ação (Action Description):**

- Tipo: Texto (ou Texto Longo, dependendo da necessidade)
- Descrição: Uma descrição detalhada da ação de administração, incluindo informações sobre o que foi feito e quais recursos foram afetados.

**6. Recursos Afetados (Affected Resources):**

- Tipo: Lista de Referências a Recursos
- Descrição: Uma lista de recursos ou entidades que foram afetados pela ação de administração. Isso pode incluir IDs de itens, usuários, eventos, episódios, etc.

**7. Resultado da Ação (Action Result):**

- Tipo: String (ou Enum)
- Descrição: O resultado da ação, como "Sucesso", "Falha", "Parcial", etc. Isso pode ser útil para identificar a eficácia das ações de administração.

**8. Detalhes Adicionais (Additional Details):**

- Tipo: JSON (ou outro formato de dados estruturados)
- Descrição: Um campo flexível que pode conter informações adicionais sobre a ação de administração, como dados relevantes, mensagens de erro, etc.

**9. IP de Origem (Source IP):**

- Tipo: String (ou Endereço IP)
- Descrição: O endereço IP da origem da ação de administração, que pode ser útil para fins de segurança e auditoria.

**10. Notificações Relacionadas (Related Notifications):**

- Tipo: Referência a Notificações
- Descrição: As notificações relacionadas a essa ação de administração, se houver, para permitir que os administradores ou outros usuários saibam sobre a ação.

**11. Visibilidade (Visibility):**

- Tipo: String (ou Enum)
- Descrição: A visibilidade do log, que pode ser "Público", "Somente para Administração", "Privado" ou outras opções, dependendo de quem deve ter acesso aos logs.

**12. Tags (Tags):**

- Tipo: Lista de Strings
- Descrição: Tags ou categorias associadas a esse log, que podem facilitar a organização e a pesquisa de logs relacionados.

## Dados de Análise e Estatísticas

**1. ID da Análise (Analysis ID):**

- Tipo: Identificador Único (por exemplo, UUID)
- Descrição: Um identificador único para cada análise ou estatística, permitindo referenciar análises específicas.

**2. Data e Hora da Análise (Analysis Timestamp):**

- Tipo: Data e Hora
- Descrição: O momento em que a análise ou estatística foi gerada ou registrada.

**3. Tipo de Análise (Analysis Type):**

- Tipo: String (ou Enum)
- Descrição: O tipo de análise realizada, como "Número de Visualizações", "Comentários Mais Populares", "Compartilhamentos por Redes Sociais", etc.

**4. Período da Análise (Analysis Period):**

- Tipo: Data ou Intervalo de Datas
- Descrição: O período de tempo abrangido pela análise. Pode ser uma data única ou um intervalo de datas.

**5. Dados da Análise (Analysis Data):**

- Tipo: JSON (ou outro formato de dados estruturados)
- Descrição: Os dados específicos da análise ou estatística. Esses dados podem variar amplamente com base no tipo de análise realizada. Por exemplo, para uma análise de "Número de Visualizações", os dados podem incluir IDs de itens e contagens de visualizações.

**6. Resultados da Análise (Analysis Results):**

- Tipo: JSON (ou outro formato de dados estruturados)
- Descrição: Os resultados da análise, que podem incluir gráficos, tabelas, métricas ou qualquer outra representação visual ou numérica dos dados.

**7. Unidade de Medida (Measurement Unit):**

- Tipo: String
- Descrição: A unidade de medida associada aos dados da análise, como "Visualizações", "Comentários", "Curtidas", etc.

**8. Filtros de Análise (Analysis Filters):**

- Tipo: JSON (ou outro formato de dados estruturados)
- Descrição: Os filtros ou parâmetros aplicados à análise, permitindo que os usuários personalizem os resultados. Isso pode incluir intervalos de datas, categorias, grupos demográficos, etc.

**9. Metodologia da Análise (Analysis Methodology):**

- Tipo: Texto (ou Texto Longo)
- Descrição: Uma descrição da metodologia usada para realizar a análise. Isso é útil para documentar como os dados foram coletados e processados.

**10. Tags (Tags):**

- Tipo: Lista de Strings
- Descrição: Tags ou categorias associadas a essa análise, que podem facilitar a organização e a pesquisa de análises relacionadas.

**11. Autor da Análise (Analysis Author):**

- Tipo: Referência ao Usuário
- Descrição: O usuário ou entidade responsável por gerar ou registrar a análise.

**12. Visibilidade (Visibility):**

- Tipo: String (ou Enum)
- Descrição: A visibilidade da análise, que pode ser "Pública", "Somente para Administração", "Privada" ou outras opções, dependendo de quem deve ter acesso às análises.

**13. Comentários e Observações (Comments and Notes):**

- Tipo: Texto (ou Texto Longo)
- Descrição: Espaço para adicionar comentários ou observações adicionais sobre a análise.

**14. URL ou Referência (URL or Reference):**

- Tipo: Texto ou URL
- Descrição: Uma URL ou referência a recursos adicionais relacionados à análise, como relatórios detalhados.

# Redes sociais

1. **ID**: Um identificador único para cada registro de conta de rede social. Isso é essencial para garantir que cada conta seja única e possa ser associada corretamente às entidades apropriadas (usuários comuns, eventos, palestrantes).

2. **Tipo de Rede Social**: Uma indicação do tipo de rede social associado. Isso pode ser um valor enumerado (por exemplo, Facebook, Twitter, LinkedIn) ou uma string.

3. **URL do Perfil**: A URL direta para o perfil da conta de rede social. Isso permitirá que os usuários acessem facilmente o perfil associado.

4. **Ícone da Rede Social**: Isso pode ser uma string ou um caminho para um arquivo de imagem que represente o ícone da rede social. Isso é útil para exibir ícones de redes sociais ao lado dos links nas páginas de perfil.

5. **ID da Entidade Associada**: Um campo que armazena o ID da entidade (usuário comum, evento ou palestrante) à qual a conta de rede social está associada. Isso é importante para manter o relacionamento entre as contas de rede social e as entidades correspondentes.

6. **Data de Criação**: A data em que a conta de rede social foi associada à entidade.

7. **Data de Modificação**: A data da última modificação da conta de rede social.

8. **Visibilidade**: Um campo que permite aos usuários definirem a visibilidade da conta de rede social. Pode ser configurado como "Público" ou "Privado".

9. **Status Ativo/Inativo**: Um campo que permite aos usuários desativarem temporariamente uma conta de rede social, caso desejem.

10. **Descrição**: Um campo para adicionar notas ou uma breve descrição sobre a conta de rede social.
