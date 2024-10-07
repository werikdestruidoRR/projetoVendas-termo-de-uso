"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function PoliticaDePrivacidade() {
  return (
    <div className="p-4 pt-10 w-full max-w-6xl mx-auto space-y-8">
      
      <section>
        <h1 className="text-4xl font-semibold text-gray-700 mb-3">Política de Privacidade</h1>
        <p className="text-gray-600">
          Esta Política de Privacidade tem como objetivo estabelecer as diretrizes de como a Bilheteria Web coleta, utiliza, compartilha e protege as informações pessoais dos usuários, de acordo com a legislação aplicável, especialmente a Lei Geral de Proteção de Dados (LGPD) - Lei nº 13.709/2018. A proteção de seus dados pessoais é uma prioridade para nós.
        </p>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-3">1. Definições Importantes</h2>
        <p className="text-gray-600">
          Antes de adentrar nos detalhes da nossa política, é importante esclarecer algumas definições:
          <br />
          - <strong>Dados Pessoais</strong>: Informação que identifica ou torna identificável uma pessoa, como nome, CPF, e-mail, etc.
          <br />
          - <strong>Tratamento de Dados</strong>: Toda operação realizada com dados pessoais, incluindo coleta, armazenamento, utilização, compartilhamento e exclusão.
          <br />
          - <strong>Titular</strong>: A pessoa natural a quem se referem os dados pessoais.
          <br />
          - <strong>Controlador</strong>: A entidade que toma as decisões referentes ao tratamento dos dados pessoais.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-3">2. Introdução</h2>
        <p className="text-gray-600">
          A Bilheteria Web, por meio desta Política de Privacidade, reafirma seu compromisso com a proteção da privacidade e dos dados pessoais dos usuários que utilizam seus serviços. Esta política é um documento transparente que visa garantir que os usuários tenham ciência sobre a coleta e o uso de seus dados, oferecendo a segurança necessária para interagir com nossa plataforma.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-3">3. Coleta de Dados</h2>
        <p className="text-gray-600">
          A Bilheteria Web coleta dados pessoais de diversas maneiras, sempre respeitando a transparência e a legalidade do processo. As principais formas de coleta de dados são:
          <br />
          - <strong>Informações Fornecidas pelo Usuário</strong>: 
          <ul>
            <li>Nome Completo: Para identificação do usuário na plataforma.</li>
            <li>CPF ou CNPJ: Para identificação fiscal e emissão de notas fiscais quando necessário.</li>
            <li>E-mail: Para comunicação, notificações e autenticação de conta.</li>
            <li>Senha: Para acesso seguro à conta do usuário na plataforma.</li>
            <li>Dados Bancários: Apenas para organizadores, a fim de realizar o repasse financeiro dos valores arrecadados na venda de ingressos.</li>
          </ul>
          <br />
          - <strong>Informações Coletadas Automaticamente</strong>:
          <ul>
            <li>Endereço IP: Para segurança e monitoramento de acessos à plataforma.</li>
            <li>Dados de Navegação: Informações sobre como os usuários interagem com a plataforma, como páginas visitadas, tempo gasto em cada seção, e preferências de navegação.</li>
            <li>Cookies e Tecnologias Semelhantes: Para melhorar a experiência do usuário e coletar informações sobre o uso da plataforma.</li>
          </ul>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-3">4. Finalidade do Tratamento dos Dados</h2>
        <p className="text-gray-600">
          Os dados pessoais coletados pela Bilheteria Web são utilizados para as seguintes finalidades:
          <br />
          - Cadastro e Autenticação: Para viabilizar o registro de novos usuários e garantir a segurança do acesso.
          <br />
          - Processamento e Gerenciamento de Vendas: Para gerenciar a compra e venda de ingressos, incluindo a criação de bilhetes e a comunicação sobre eventos.
          <br />
          - Repasse Financeiro: Para facilitar o repasse de valores arrecadados aos organizadores de eventos, garantindo que todas as transações sejam realizadas de forma precisa e rápida.
          <br />
          - Segurança: Para monitorar e garantir a segurança das transações realizadas na plataforma, prevenindo fraudes e acessos não autorizados.
          <br />
          - Comunicação: Para permitir a comunicação entre organizadores e participantes, incluindo notificações sobre eventos, atualizações e promoções.
          <br />
          - Melhoria de Serviços: Para analisar o comportamento dos usuários e implementar melhorias na plataforma, aprimorando a experiência de uso.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-3">5. Compartilhamento de Dados</h2>
        <p className="text-gray-600">
          A Bilheteria Web compartilha dados pessoais dos usuários de forma restrita e apenas quando necessário para a execução dos serviços prestados. Isso inclui:
          <br />
          - Organizadores de Eventos: Compartilhamos informações necessárias para que os organizadores possam gerenciar suas vendas e atender aos participantes. Esses organizadores têm a responsabilidade de tratar os dados conforme a legislação vigente.
          <br />
          - Instituições de Pagamento: A Bilheteria Web utiliza serviços de pagamento como o MercadoPago para processar transações financeiras. Garantimos que esses prestadores de serviços adotem práticas de segurança compatíveis e que respeitem a privacidade dos usuários.
          <br />
          - Autoridades Legais: A Bilheteria Web poderá compartilhar dados com autoridades legais, conforme exigido por lei ou por ordem judicial. Isso pode ocorrer, por exemplo, em investigações de fraudes ou em atendimento a solicitações legítimas das autoridades.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-3">6. Segurança dos Dados</h2>
        <p className="text-gray-600">
          A Bilheteria Web adota uma série de medidas de segurança para proteger os dados pessoais contra acessos não autorizados, divulgação indevida, destruição, alteração ou interrupção de serviços. Essas medidas incluem:
          <br />
          - <strong>Criptografia</strong>: Utilizamos protocolos de segurança, como HTTPS, para proteger a transmissão de dados.
          <br />
          - <strong>Controle de Acesso</strong>: Somente pessoas autorizadas têm acesso aos dados pessoais dos usuários, limitando o acesso conforme a necessidade.
          <br />
          - <strong>Monitoramento Contínuo</strong>: Realizamos monitoramento contínuo de nossa infraestrutura para identificar e responder rapidamente a possíveis incidentes de segurança.
          <br />
          - <strong>Política de Senhas</strong>: Recomendamos que os usuários utilizem senhas fortes e únicas e que troquem suas senhas periodicamente.
          <br />
          Os usuários são responsáveis por manter suas credenciais de acesso (nome de usuário e senha) seguras, não compartilhando essas informações com terceiros.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-3">7. Direitos dos Usuários</h2>
        <p className="text-gray-600">
          Os usuários têm os seguintes direitos em relação aos seus dados pessoais, conforme estabelecido pela LGPD:
          <br />
          - Acesso: Solicitar informações sobre os dados pessoais armazenados pela Bilheteria Web.
          <br />
          - Correção: Requerer a correção de dados incorretos, incompletos ou desatualizados.
          <br />
          - Exclusão: Solicitar a exclusão dos seus dados pessoais, exceto quando houver uma base legal que justifique a retenção desses dados.
          <br />
          - Portabilidade: Solicitar a portabilidade de seus dados para outro fornecedor de serviços.
          <br />
          - Revogação do Consentimento: Revogar o consentimento dado para o tratamento dos dados pessoais a qualquer momento.
          <br />
          - Oposição: Opor-se ao tratamento dos dados quando este for realizado com base em interesses legítimos ou para fins de marketing direto.
          <br />
          Os usuários podem exercer esses direitos entrando em contato com a Bilheteria Web pelo e-mail: contato@bilheteriaweb.com.br.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-3">8. Tempo de Retenção dos Dados</h2>
        <p className="text-gray-600">
          Os dados pessoais dos usuários serão mantidos pela Bilheteria Web enquanto forem necessários para a prestação dos serviços ou para o cumprimento de obrigações legais. Após esse período, os dados serão excluídos ou anonimizados, salvo se houver outra previsão legal para a retenção.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-3">9. Cookies</h2>
        <p className="text-gray-600">
          A Bilheteria Web utiliza cookies e tecnologias semelhantes para melhorar a experiência dos usuários na plataforma. Os cookies são pequenos arquivos de texto armazenados no dispositivo do usuário e servem para:
          <br />
          - Melhorar a Navegação: Facilitar o login e personalizar a experiência do usuário.
          <br />
          - Coletar Dados Estatísticos: Permitir a análise de como os usuários interagem com a plataforma.
          <br />
          - Personalização de Conteúdo: Oferecer conteúdo e anúncios personalizados.
          <br />
          Os usuários podem gerenciar ou desativar os cookies nas configurações do navegador.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-3">10. Alterações na Política de Privacidade</h2>
        <p className="text-gray-600">
          A Bilheteria Web se reserva o direito de modificar esta Política de Privacidade a qualquer momento. Qualquer alteração será comunicada aos usuários de forma clara e acessível.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-3">11. Contato</h2>
        <p className="text-gray-600">
          Para dúvidas, solicitações ou reclamações relacionadas a esta Política de Privacidade ou ao tratamento de seus dados pessoais, os usuários podem entrar em contato pelo e-mail: contato@bilheteriaweb.com.br. Estamos à disposição para esclarecer qualquer questão e garantir a proteção de seus direitos.
        </p>
      </section>
    </div>
  )
}
