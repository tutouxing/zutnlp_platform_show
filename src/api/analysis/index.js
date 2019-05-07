/**
 * author:wastelands
 * Date:2019-05-05 19:15
 * introduce:
 */
import fetch from '../../utils/fetch'
export function analysis_news(text) {
    if (text.replace(/[^0-9\u4e00-\u9fa5]/g,'')){
        console.log("aaa")
        return fetch({
            url:"http://localhost:19999/nlp_ch?text="+text,
            method:"post",
        });
    }

    else
        return fetch({
        url:"http://localhost:19999/nlp_en?text="+text,
        method:"post",
        // params:text
    })

}