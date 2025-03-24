import React from 'react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Política de Privacidade</h1>
        
        <div className="space-y-6 text-gray-600">
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Introdução</h2>
            <p>
              Esta Política de Privacidade descreve como o nosso aplicativo coleta, usa e protege suas informações
              quando você utiliza nosso serviço de automação para criação de contas no Pinterest.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Informações que Coletamos</h2>
            <p>Coletamos as seguintes informações:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Endereços de e-mail fornecidos para criação de contas</li>
              <li>Senhas geradas automaticamente</li>
              <li>Dados de autenticação do Google Drive (quando autorizado)</li>
              <li>Endereços IP e informações de proxy utilizados</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Como Usamos suas Informações</h2>
            <p>Utilizamos suas informações para:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Criar contas no Pinterest automaticamente</li>
              <li>Armazenar dados das contas criadas no Google Drive (quando autorizado)</li>
              <li>Melhorar a eficiência e segurança do serviço</li>
              <li>Fornecer suporte técnico quando necessário</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Armazenamento e Segurança</h2>
            <p>
              Todas as informações armazenadas no Google Drive são criptografadas usando padrões
              de segurança avançados. Implementamos medidas técnicas e organizacionais apropriadas
              para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Compartilhamento de Dados</h2>
            <p>
              Não compartilhamos suas informações com terceiros, exceto quando necessário para
              fornecer nossos serviços (como a integração com o Google Drive) ou quando exigido
              por lei.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Seus Direitos</h2>
            <p>Você tem o direito de:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados imprecisos</li>
              <li>Solicitar a exclusão de seus dados</li>
              <li>Retirar seu consentimento para o processamento de dados</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Atualizações da Política</h2>
            <p>
              Podemos atualizar esta política periodicamente. Recomendamos que você revise
              esta página regularmente para se manter informado sobre quaisquer alterações.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Contato</h2>
            <p>
              Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos
              seus dados, entre em contato conosco através dos canais de suporte disponíveis
              no aplicativo.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};