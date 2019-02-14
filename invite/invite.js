/*created by 小饭桶 on 2018/10/31 */
    // $(function () {
window.onload = function () {
    let peopleList = [];
    const inner = {
        appendList : function () {
            data.map(function ( item,index ) {
                let $li = '<li>\n' +
                    '                <div class="people-item">\n' +
                    '                    <img src='+item.pic+' alt="图片">\n' +
                    '                    <div class="people-msg">\n' +
                    '                        <p class="people-name">'+item.name+'</p>\n' +
                    '                        <p class="people-desc">'+item.place+'</p>\n' +
                    '                    </div>\n' +
                    '                    <span class="invit-btn" data-status='+item.invited +'>邀请问答</span>\n' +
                    '                </div>\n' +
                    '            </li>'
                $('.wrap-middle>ul').append($li);
            });
        },
        invitPeople: function () {
            $(this).toggleClass('on');
            $(this).parent()[0]
            let invitP =  $(this).prev().children()[0].innerText;
            let nameString = '';
            if($(this).attr("data-status") === 'false'){
                this.innerHTML = '收回邀请';
                $(this).attr("data-status","true")
                peopleList.push( invitP );
            }
            else{
                this.innerHTML = '邀请问答';
                $(this).attr("data-status","false");
                peopleList.splice(peopleList.indexOf(invitP),1);
                // console.log(peopleList)
            };
            peopleList.map(function ( item,index ) {
                nameString += item + ',';
            })
            $('.descrip-txt').remove();
            let $p = peopleList.length === 0 ? '<p class="descrip-txt">您未邀请任何人</p>'
                : '<p class="descrip-txt">您已邀请<em>'+nameString+'</em>等'+ peopleList.length+'人</p>'
            $('.wrap-top').append($p);
        },
    }
    inner.appendList();
    $('.invit-btn').click(inner.invitPeople);
}