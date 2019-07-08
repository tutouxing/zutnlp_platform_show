/**
 * author:wastelands
 * Date:2019-06-28 14:42
 * introduce:
 */
import {updateComment} from "../../api/operate";
import Vue from "vue"

export function passReview(comment) {//审核通过  首评状态改为1（-1不通过 0等待审核）
    comment.status = 1;
    // Vue.$message({
    //     showClose: true,
    //     message: '修改成功',
    //     type: 'success'
    // });
    //更新数据库
    updateComment(comment);
    console.log(comment)
    return comment;
}
export function failReview(comment) {//审核通过  首评状态改为1（-1不通过 0等待审核）
    comment.status = -1;
    // Vue.$message({
    //     showClose: true,
    //     message: '修改成功',
    //     type: 'success'
    // });
    updateComment(comment);
    console.log(comment)
    return comment;
}
