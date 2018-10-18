let form = $(".contato");
console.log(form)
form.validate({
    errorElement:"span",
    rules:{
        name:"required",
        email:{
            required:true,
            email:true
        },
        phone:"required",
        msg: "required"
    },
    messages:{
        name:"Digite seu nome",
        email:{
            required:"Digite seu email",
            email:"Digite um endereço de email válido"
        },
        phone:"Digite um  número de telefone para contato",
        msg:"Digite uma mensagem...minha bola de cristal está quebrada"
    }
});