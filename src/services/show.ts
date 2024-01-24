export function show() {
    let password:any = document.getElementById('password')
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
}