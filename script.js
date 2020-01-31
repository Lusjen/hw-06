const nameDoc = prompt("Введіть назву документа", "");
const doc = {
    title: "",
    content: "",
    footer: "",
    date: "",
    application: {
        document1: {
            title: "document",
            content: "content",
            footer: "footer",
            date: "date",
        }
    },
    show: function (nameDoc) {
        document.write(`<div class="main"> <p class="title"> ${this.title = this.application[nameDoc].title}</p> <p class="content"> ${this.content = this.application[nameDoc].content} </p> <div class="bottom"><p class="footer"> ${this.footer = this.application[nameDoc].footer} </p> <p class="date"> ${this.date = this.application[nameDoc].date} </p></div></div>`);
        console.log(nameDoc);
    }
}
doc.show(nameDoc);

