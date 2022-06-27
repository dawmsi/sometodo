const addMarkPop = []
addMarkPop[0] = 'div'
addMarkPop[1] = 'markEditor'
addMarkPop[2] = `
<select name="priority" id="" value="priority">
<option value="yellow">yellow</option>
<option value="orange">orange</option>
<option value="red"><i class="fa fa-flag"></i>red</option>
<option selected hidden disabled>priority</option>
</select>
<input placeholder="Write name of mark" type="text">
<div class="btn-wrapper"><a href="#"><i class="fa plus">+</i></a></div>
    `
function adderMark() {
    renderNewPop(addMarkPop)

}
