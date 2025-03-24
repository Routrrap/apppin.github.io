import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import { validateEmail } from '../utils/validation';

interface EmailInputProps {
  onEmailsSubmit: (emails: string[]) => void;
}

export const EmailInput: React.FC<EmailInputProps> = ({ onEmailsSubmit }) => {
  const [emails, setEmails] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailList = emails.split('\n').map(email => email.trim()).filter(Boolean);
    const invalidEmails = emailList.filter(email => !validateEmail(email));

    if (invalidEmails.length > 0) {
      setError(`Invalid emails found: ${invalidEmails.join(', ')}`);
      return;
    }

    setError('');
    onEmailsSubmit(emailList);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      setEmails(content);
    };
    reader.readAsText(file);
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Enter Emails (one per line)
          </label>
          <textarea
            className="input-base min-h-[120px] sm:min-h-[160px]"
            value={emails}
            onChange={(e) => setEmails(e.target.value)}
            placeholder="email@example.com"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <button type="submit" className="btn-primary">
            Add Emails
          </button>

          <label className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 cursor-pointer transition-colors duration-200">
            <Upload className="w-4 h-4" />
            <span>Upload CSV</span>
            <input
              type="file"
              accept=".csv,.txt"
              className="hidden"
              onChange={handleFileUpload}
            />
          </label>
        </div>

        {error && (
          <p className="mt-2 text-sm text-red-600 bg-red-50 p-2 rounded-lg">{error}</p>
        )}
      </form>
    </div>
  );
};