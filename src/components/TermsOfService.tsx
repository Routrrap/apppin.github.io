import React from 'react';

export const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Termos de Serviço</h1>
        
        <div className="space-y-6 text-gray-600">
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Aceitação dos Termos</h2>
            <p>
              Ao utilizar nosso aplicativo de automação para criação de contas no Pinterest,
              você concorda com estes Termos de Serviço. Se você não concordar com algum
              dos termos, não deverá usar o serviço.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Descrição do Serviço</h2>
            <p>
              Nosso aplicativo oferece serviços de automação para criação de contas no Pinterest,
              incluindo:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Criação automatizada de contas no Pinterest</li>
              <li>Gerenciamento de múltiplas contas</li>
              <li>Integração com Google Drive para armazenamento seguro</li>
              <li>Utilização de proxies para maior segurança</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Responsabilidades do Usuário</h2>
            <p>Ao utilizar nosso serviço, você concorda em:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Fornecer informações precisas e atualizadas</li>
              <li>Manter a segurança de suas credenciais de acesso</li>
              <li>Não utilizar o serviço para fins ilegais ou não autorizados</li>
              <li>Respeitar os termos de serviço do Pinterest</li>
              <li>Não compartilhar sua conta com terceiros</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Limitações de Uso</h2>
            <p>
              O serviço pode estar sujeito a limitações de uso, incluindo:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Número máximo de contas que podem ser criadas</li>
              <li>Restrições de velocidade na criação de contas</li>
              <li>Limitações de armazenamento no Google Drive</li>
              <li>Restrições de uso de proxy</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo e software do aplicativo são protegidos por direitos autorais
              e outras leis de propriedade intelectual. Você não tem permissão para modificar,
              distribuir ou criar trabalhos derivados do nosso serviço.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Isenção de Responsabilidade</h2>
            <p>
              O serviço é fornecido "como está", sem garantias de qualquer tipo. Não nos
              responsabilizamos por quaisquer danos diretos, indiretos, incidentais ou
              consequenciais resultantes do uso do serviço.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Modificações dos Termos</h2>
            <p>
              Reservamos o direito de modificar estes termos a qualquer momento. As alterações
              entrarão em vigor imediatamente após sua publicação. O uso continuado do serviço
              após tais alterações constitui sua aceitação dos novos termos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Rescisão</h2>
            <p>
              Reservamos o direito de encerrar ou suspender sua conta e acesso ao serviço
              a qualquer momento, por qualquer motivo, sem aviso prévio.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">9. Lei Aplicável</h2>
            <p>
              Estes termos são regidos pelas leis do Brasil. Qualquer disputa relacionada
              a estes termos será submetida à jurisdição exclusiva dos tribunais brasileiros.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};