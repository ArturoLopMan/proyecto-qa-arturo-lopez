export class LoginPage {
  constructor(page) {
    this.page = page;

    // Campos del formulario
    this.inputEmail = page.getByRole('textbox', { name: 'Email' });
    this.inputPassword = page.getByRole('textbox', { name: 'Password' });

    // Botón
    this.buttonSignIn = page.getByRole('button', { name: 'Sign In' });

    // Mensajes de validación
    this.messageFeaturedEvents = page.getByText('Featured Events');
    this.messageInvalidCredentials = page.locator('[aria-live="polite"]')
      .getByText(/invalid email or password/i);
    this.messageInvalidEmail = page.getByText('Enter a valid email');
    this.messageInvalidPassword = page.getByText('Password must be at least 6 characters');
  }

  // Abrir página de login
  async abrirLogin() {
    await this.page.goto('/login');
  }

  // Iniciar sesión
  async iniciarSesion(email, password) {
    await this.inputEmail.fill(email);
    await this.inputPassword.fill(password);
    await this.buttonSignIn.click();
  }
}