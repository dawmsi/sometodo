class Mark {
    static createMark = (mark, index) => {
        return `
        <li class="item">
        <i class="fa fa-tag" style="color=red"></i>
        <a href="">${mark}</a>
        <div class="btn-wrapper">
        <button><i class="fa fa-edit"></i></button>
        <button><i class="fa fa-trash"></i></button>
        </div>
    </li>
        `
    }
}