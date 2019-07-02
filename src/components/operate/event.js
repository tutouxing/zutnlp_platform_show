/**
 * author:wastelands
 * Date:2019-06-28 14:42
 * introduce:
 */
export function passReview(comment) {//审核通过  首评状态改为1（-1不通过 0等待审核）
    comment.state = 1;
    this.$message({
        showClose: true,
        message: '修改成功',
        type: 'success'
    });
    //更新数据库
    return comment;
}
export function failReview(comment) {//审核通过  首评状态改为1（-1不通过 0等待审核）
    comment.state = -1;
    this.$message({
        showClose: true,
        message: '修改成功',
        type: 'success'
    });
    return comment;
}
