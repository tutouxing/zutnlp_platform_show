/**
 * author:wastelands
 * Date:2019-05-05 19:15
 * introduce:
 */
import fetch from '../../utils/fetch'
export function analysis_wpn(text) {
    if (text.replace(/[^0-9\u4e00-\u9fa5]/g,'')){//中文
        return fetch({
            url:"http://localhost:19999/nlp_ch/wpn?text="+text,
            method:"post",
        });
    }
    else//英文
        return fetch({
        url:"http://localhost:19999/nlp_en/wpn?text="+text,
        method:"post",
        // params:text
    })
}
export function analysis_dependence(text) {
    if (text.replace(/[^0-9\u4e00-\u9fa5]/g,'')){//中文
        return fetch({
            url:"http://localhost:19999/nlp_ch/dependency?text="+text,
            method:"post",
        });
    }
    else//英文
        return fetch({
            url:"http://localhost:19999/nlp_en/dependence?text="+text,
            method:"post",
            // params:text
        })
}
export function analysis_tree(text) {
    if (text.replace(/[^0-9\u4e00-\u9fa5]/g,'')){//中文
        return fetch({
            url:"http://localhost:19999/nlp_ch/tree?text="+text,
            method:"post",
        });
    }
    else//英文
        return fetch({
            url:"http://localhost:19999/nlp_en/tree?text="+text,
            method:"post",
            // params:text
        })
}