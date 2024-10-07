"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function TermosDeUso() {
    return (
        <div className="p-4 pt-10 w-full max-w-6xl mx-auto space-y-8">

            <section>
                <h1 className="text-4xl font-semibold text-gray-700 mb-3">Termos de Uso da Plataforma Bilheteria Web</h1>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-700 mb-3">1. Definições</h2>
                <p className="text-gray-600">
                    1.1 Bilheteria Web: Plataforma digital de intermediação, que facilita o gerenciamento, divulgação e venda de ingressos para eventos pagos ou gratuitos. Atua como facilitadora tecnológica para o processamento de transações financeiras e o controle de acessos aos eventos. Não se responsabiliza pela criação, organização, execução ou alterações nos eventos.
                    <br />
                    1.2 Organizador: Pessoa física ou jurídica que utiliza a Bilheteria Web para criar, divulgar e gerenciar eventos. O Organizador é o único responsável pelas informações fornecidas sobre o evento, incluindo sua veracidade, legalidade e conformidade com todas as leis e regulamentações aplicáveis. Além disso, o Organizador deve assegurar a realização e qualidade do evento.
                    <br />
                    1.3 Participante: Pessoa física que adquire ingressos por meio da Bilheteria Web para participar de eventos criados pelos Organizadores. O Participante tem o direito de acesso ao evento conforme especificado, desde que cumpridas as condições de compra e acesso estabelecidas pelo Organizador.
                    <br />
                    1.4 Usuário: Termo que se refere tanto aos Organizadores quanto aos Participantes. Os Usuários devem cumprir as regras e obrigações destes Termos de Uso e das políticas adicionais disponíveis na plataforma.
                    <br />
                    1.5 Serviços: Produtos e funcionalidades oferecidos pela Bilheteria Web, incluindo, mas não se limitando a, a criação e divulgação de eventos, venda e emissão de ingressos, processamento de pagamentos, gestão de listas de participantes e controle de acessos a eventos.
                    <br />
                    1.6 Parceiros Terceiros: Entidades externas contratadas pela Bilheteria Web para fornecer serviços complementares, como processadores de pagamento, soluções de marketing e logística.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-700 mb-3">2. Aceitação dos Termos de Uso</h2>
                <p className="text-gray-600">
                    2.1 Concordância Obrigatória: A utilização da plataforma Bilheteria Web implica na aceitação integral destes Termos de Uso e das políticas correlacionadas, como Política de Privacidade e Política de Cookies. O Usuário se compromete a respeitar todas as condições estabelecidas, sendo o uso da plataforma condicionado a essa aceitação.
                    <br />
                    2.2 Atualizações e Reajustes: A Bilheteria Web pode revisar e alterar os Termos de Uso a qualquer momento, com aviso prévio aos Usuários. Essas mudanças serão informadas por meio de notificações ou atualizações no próprio site. O Usuário é responsável por revisar periodicamente os Termos para garantir que está ciente das modificações. A continuidade do uso dos serviços após a publicação das modificações implica aceitação tácita dos novos termos.
                    <br />
                    2.3 Idade Mínima e Capacidade Jurídica: O uso da Bilheteria Web é permitido apenas para pessoas maiores de 18 anos ou menores devidamente autorizados por seus responsáveis legais. O Usuário deve possuir plena capacidade jurídica para aceitar estes Termos e firmar contratos legalmente vinculativos.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-700 mb-3">3. Descrição dos Serviços</h2>
                <p className="text-gray-600">
                    3.1 Intermediação de Eventos: A Bilheteria Web oferece uma plataforma que permite aos Organizadores criar e gerenciar eventos de forma autônoma, definindo datas, locais, capacidade de público, preços dos ingressos e outras características dos eventos. A plataforma permite ainda a divulgação desses eventos por meio de páginas personalizadas, compartilháveis e acessíveis ao público.
                    <br />
                    3.2 Processamento de Pagamentos: A Bilheteria Web oferece aos Organizadores uma infraestrutura segura para processar pagamentos via boleto bancário, cartão de crédito, débito ou Pix. A confirmação de pagamentos é necessária para que os ingressos sejam emitidos e enviados ao Participante. Em casos de falha nos pagamentos, a Bilheteria Web não será responsável pela não emissão de ingressos.
                    <br />
                    3.3 Comissões e Taxas: Para eventos pagos, a Bilheteria Web cobra uma taxa de intermediação de 7,9% sobre o valor total de cada ingresso vendido. Para ingressos com valor inferior a R$ 2,50, será aplicada uma taxa mínima fixa de R$ 2,50 por ingresso. Esses valores são deduzidos automaticamente do montante pago pelos Participantes e o valor líquido é transferido ao Organizador.
                    <br />
                    3.4 Repasses ao Organizador: O valor líquido arrecadado será transferido ao Organizador em até três dias úteis após o término do evento, desde que o evento tenha ocorrido conforme programado. Caso o evento seja cancelado, o reembolso aos Participantes será responsabilidade do Organizador, conforme descrito na Política de Pagamentos.
                    <br />
                    3.5 Criação de Páginas de Evento: A plataforma disponibiliza uma página exclusiva para cada evento cadastrado pelo Organizador, contendo informações como data, local, detalhes do evento, opções de ingressos e valores. O Organizador pode personalizar a página para atender suas necessidades específicas de divulgação.
                    <br />
                    3.6 Ferramentas de Gestão: A Bilheteria Web fornece ferramentas para o gerenciamento de eventos, incluindo controle de ingressos, envio de notificações aos Participantes, relatórios de vendas, lista de presentes e controle de acessos por meio de QR Code ou outros métodos de verificação de ingressos.
                    <br />
                    3.7 Segurança de Dados: A Bilheteria Web utiliza protocolos de segurança avançados para proteger as informações pessoais e financeiras dos Usuários. Todos os dados são armazenados e processados de acordo com a legislação aplicável, incluindo a Lei Geral de Proteção de Dados (LGPD).
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-700 mb-3">4. Cadastro e Responsabilidades dos Usuários</h2>
                <p className="text-gray-600">
                    4.1 Cadastro de Conta: Para utilizar a Bilheteria Web, é necessário que o Usuário crie uma conta na plataforma, fornecendo dados precisos, completos e atualizados, incluindo nome completo, endereço de e-mail e, no caso de Organizadores, dados bancários para o recebimento dos valores referentes à venda de ingressos.
                    <br />
                    4.2 Veracidade das Informações: O Usuário é responsável pela veracidade e autenticidade das informações fornecidas durante o cadastro. A Bilheteria Web não se responsabiliza por falhas decorrentes de informações incorretas ou desatualizadas, como transferências bancárias erradas devido a dados inválidos fornecidos pelo Organizador.
                    <br />
                    4.3 Responsabilidade pelas Credenciais: O Usuário é o único responsável pela proteção de suas credenciais de acesso (nome de usuário e senha). O compartilhamento dessas informações com terceiros é expressamente proibido. Em caso de suspeita de uso não autorizado de sua conta, o Usuário deve informar imediatamente a Bilheteria Web.
                    <br />
                    4.4 Suspensão e Cancelamento de Contas: A Bilheteria Web se reserva o direito de suspender ou cancelar a conta de qualquer Usuário que viole estes Termos de Uso, utilize a plataforma para fins ilícitos ou tente fraudar o sistema. A plataforma pode ainda reter valores provenientes de vendas de ingressos até a resolução de disputas relacionadas a fraude ou violação de leis.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-700 mb-3">5. Política de Pagamentos</h2>
                <p className="text-gray-600">
                    5.1 Reembolsos e Cancelamentos de Eventos: O Organizador é integralmente responsável pela política de reembolso e cancelamento dos eventos. Caso um evento seja cancelado ou alterado, o Organizador deve providenciar o reembolso total aos Participantes, conforme a política estabelecida e as normas de proteção ao consumidor aplicáveis. A Bilheteria Web não é responsável por processar esses reembolsos, exceto em casos excepcionais nos quais os valores ainda não tenham sido transferidos ao Organizador.
                    <br />
                    5.2 Cobrança de Taxas: As taxas de serviço da Bilheteria Web não são reembolsáveis, mesmo em casos de cancelamento de eventos. Ao criar um evento pago, o Organizador concorda que a taxa de intermediação será retida pela Bilheteria Web, independentemente de cancelamentos ou reembolsos posteriores.
                    <br />
                    5.3 Disputas de Pagamento: Caso haja qualquer disputa relacionada ao pagamento ou ao reembolso de ingressos, o Participante deve entrar em contato diretamente com o Organizador. A Bilheteria Web atuará apenas como facilitadora, não se responsabilizando por disputas contratuais entre Organizador e Participante.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-700 mb-3">6. Cancelamento e Estorno</h2>
                <p className="text-gray-600">
                    6.1 Entrega de Ingressos: Os ingressos adquiridos pelos Participantes serão enviados eletronicamente após a confirmação do pagamento, via e-mail ou na conta do usuário na plataforma. O ingresso conterá um código único e QR Code que será utilizado para a validação de entrada no evento.
                    <br />
                    6.2 Reembolso de Ingressos: O Participante tem direito ao reembolso integral em até sete dias após a compra, desde que o evento ainda não tenha ocorrido, conforme previsto no Código de Defesa do Consumidor. A solicitação de reembolso deve ser feita antes das 24 horas que antecedem o evento.
                    <br />
                    6.3 Alterações nos Eventos: Em caso de alterações substanciais no evento, como mudança de local, data ou cancelamento, o Participante poderá optar por aceitar as novas condições ou solicitar o reembolso total do valor pago.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-700 mb-3">7. Propriedade Intelectual</h2>
                <p className="text-gray-600">
                    7.1 Direitos Autorais e Propriedade: Todos os conteúdos disponibilizados na Bilheteria Web, incluindo design, código fonte, gráficos, logotipos, ícones e software, são protegidos por leis de direitos autorais e são de propriedade exclusiva da Bilheteria Web ou de seus licenciadores.
                    <br />
                    7.2 Licença de Uso: O Organizador concede à Bilheteria Web o direito de usar as informações, imagens e descrições dos eventos para fins de promoção e divulgação na própria plataforma ou em redes sociais, conforme necessário para a execução dos serviços.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-700 mb-3">8. Responsabilidades</h2>
                <p className="text-gray-600">
                    8.1 Limitação de Responsabilidade: A Bilheteria Web não é responsável por falhas nos eventos organizados por terceiros, cancelamentos, mudanças de datas, problemas de infraestrutura, segurança ou qualquer outro aspecto relacionado à execução dos eventos. A responsabilidade por tais aspectos recai unicamente sobre o Organizador.
                    <br />
                    8.2 Disponibilidade do Serviço: A Bilheteria Web se esforça para manter a plataforma disponível de forma contínua, porém não garante a disponibilidade ininterrupta de seus serviços. A plataforma não será responsável por perdas ou danos decorrentes de falhas técnicas, manutenção programada, atualizações ou incidentes de força maior.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-700 mb-3">9. Alterações nos Termos de Uso</h2>
                <p className="text-gray-600">
                    9.1 Tratamento de Dados Pessoais: A Bilheteria Web coleta, armazena e utiliza dados pessoais conforme sua Política de Privacidade e em conformidade com a Lei Geral de Proteção de Dados (LGPD). O uso dos dados é necessário para a prestação dos serviços contratados e para fins de segurança, marketing e otimização da plataforma.
                    <br />
                    9.2 Compartilhamento de Dados: A Bilheteria Web pode compartilhar dados com terceiros, como processadores de pagamento e parceiros de marketing, quando necessário para a execução de serviços ou conforme exigido por lei. Esses parceiros estão sujeitos a contratos de confidencialidade e não podem utilizar os dados para fins não autorizados.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-700 mb-3">10. Disposições Finais</h2>
                <p className="text-gray-600">
                    10.1 Modificações: A Bilheteria Web pode alterar os presentes Termos de Uso a qualquer momento, mediante notificação prévia aos Usuários. Tais alterações entrarão em vigor a partir da data de publicação. O uso contínuo da plataforma após a modificação dos Termos constitui aceitação das novas condições.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-700 mb-3">11. Foro de Eleição</h2>
                <p className="text-gray-600">
                    11.1 Independência das Cláusulas: Se qualquer disposição destes Termos for considerada inválida ou inexequível por um tribunal competente, as demais disposições continuarão em pleno vigor e efeito.
                    <br />
                    11.2 Legislação Aplicável e Foro: Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Qualquer disputa ou controvérsia relacionada ao uso da Bilheteria Web será resolvida no foro da Comarca de Campinas, Estado de São Paulo, com renúncia expressa de qualquer outro.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-700 mb-3">12. Suporte e Contato</h2>
                <p className="text-gray-600">
                    12.1 Canal de Suporte: A Bilheteria Web disponibiliza canais de atendimento ao Usuário para tirar dúvidas, reportar problemas ou solicitar informações adicionais. O contato pode ser feito através do e-mail [email protected] ou pelo sistema de suporte disponível na plataforma.
                </p>
            </section>
        </div>
    )
}
