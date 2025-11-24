export const dialogModal = function () {
    
    const bookDialog = document.getElementById("book_dialog");
    const openDialogBtn = document.getElementById("open_dialog_btn");
    const closeDialogBtn = document.getElementById("close_dialog_btn");

    openDialogBtn.addEventListener("click", () => {
        bookDialog.style.display = "block";
    });

    closeDialogBtn.addEventListener("click", () => {
        bookDialog.style.display = "none";
    });

}