export class LoginPage {
  constructor(page) {
    this.page = page;

    // Campos del formulario
    this.emailInput = page.getByRole('textbox', { name: 'Email' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });

    // Botón
    this.signInButton = page.getByRole('button', { name: 'Sign In' });

    // Indicador de login correcto
    this.featuredEventsText = page.getByText('Featured Events');

    // Mensajes de validación
    this.notificationArea = page.locator('[aria-live="polite"]');
    this.invalidEmailMessage = page.getByText('Enter a valid email');
    this.invalidPasswordMessage = page.getByText('Password must be at least 6 characters');
  }

  // Abrir la página de login
  async openLogin() {
    await this.page.goto('/login');
  }

  // Iniciar sesión
  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }
}