import { validateEmail, generatePassword } from '../validation';

describe('validateEmail', () => {
  test('deve validar um email correto', () => {
    expect(validateEmail('usuario@exemplo.com')).toBe(true);
  });

  test('deve rejeitar um email sem @', () => {
    expect(validateEmail('usuarioexemplo.com')).toBe(false);
  });

  test('deve rejeitar um email sem domínio', () => {
    expect(validateEmail('usuario@')).toBe(false);
  });

  test('deve rejeitar um email com espaços', () => {
    expect(validateEmail('usuario @exemplo.com')).toBe(false);
  });
});

describe('generatePassword', () => {
  test('deve gerar uma senha com 16 caracteres', () => {
    const senha = generatePassword();
    expect(senha.length).toBe(16);
  });

  test('deve conter pelo menos uma letra maiúscula', () => {
    const senha = generatePassword();
    expect(senha).toMatch(/[A-Z]/);
  });

  test('deve conter pelo menos uma letra minúscula', () => {
    const senha = generatePassword();
    expect(senha).toMatch(/[a-z]/);
  });

  test('deve conter pelo menos um número', () => {
    const senha = generatePassword();
    expect(senha).toMatch(/[0-9]/);
  });

  test('deve conter pelo menos um caractere especial', () => {
    const senha = generatePassword();
    expect(senha).toMatch(/[!@#$%^&*()_+]/);
  });

  test('deve gerar senhas diferentes em chamadas consecutivas', () => {
    const senha1 = generatePassword();
    const senha2 = generatePassword();
    expect(senha1).not.toBe(senha2);
  });
});