(function () {

    let form = document.querySelector('#myForm');
    if (form) {
        let fields = form.querySelectorAll("[data-error]");
        return fields;
    }


    function isNotEmpty(field) {

        return field.value !== "";

    }

    function isAtLeast(field, min) {
        return field.value.length >= min;

    }

    function isEmail(field) {
        return field.value.indexOf("@") !== -1;
    }

    function displayErrors(errors) {

        let ul = document.querySelector("ul.errors");
        if (!ul) {
            ul = document.createElement("ul");
            ul.classList.add("errors");
        }
        ul.innerHTML = "";

        errors.forEach(function (error) {
            let li = document.createElement("li");
            li.textContent = error;
            ul.appendChild(li);
        })
        form.parentNode.insertBefore(ul, form)
    }
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            let errors = [];

            for (let i = 0; i < fields.length; i++) {

                let field = fields[i];
                isValid = false;


                if (field.type === "text") {
                    isValid = isNotEmpty(field);
                } else if (field.type === "email") {
                    isValid = isEmail(field)
                } else if (field.type === "textarea") {
                    isValid = isAtLeast(field, 2);
                }

                if (!isValid) {
                    errors.push(field.dataset.error);
                    field.classList.add = "error";
                } else {
                    field.classList.remove("error");
                }
            }


            if (errors.length) {
                displayErrors(errors)
            } else {
                form.submit();

            }
            console.log(errors);

        }, false)
    }


})();