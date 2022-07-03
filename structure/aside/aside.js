class Aside {
    static aside = document.querySelector("#aside");
    static eye = document.querySelector("#eye");
    static hideshow() {
        this.aside.classList.toggle("hiden");
        if (aside.classList.contains("hiden")) {
            this.eye.classList.remove("fa-eye-slash");
            this.eye.classList.add("fa-eye");
        } else {
            this.eye.classList.remove("fa-eye");
            this.eye.classList.add("fa-eye-slash");
        }
    }
}
