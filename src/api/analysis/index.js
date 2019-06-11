/**
 * author:wastelands
 * Date:2019-05-05 19:15
 * introduce:
 */
import fetch from '../../utils/fetch'
export function analysis_wpn(text) {
    if (text.replace(/[^0-9\u4e00-\u9fa5]/g,'')){//中文
        return fetch({
            url:"http://202.196.37.144:8898/nlp/nlp_ch/wpn/",
            method:"post",
            data:text
        });
    }
    else//英文
        return fetch({
        url:"http://202.196.37.144:8898/nlp/nlp_en/wpn/",
        method:"post",
        data:text
    })
}
export function analysis_dependence(text) {
    if (text.replace(/[^0-9\u4e00-\u9fa5]/g,'')){//中文
        return fetch({
            url:"http://202.196.37.144:8898/nlp/nlp_ch/dependency/",
            method:"post",
            data:text
        });
    }
    else//英文
        return fetch({
            url:"http://202.196.37.144:8898/nlp/nlp_en/dependence",
            method:"post",
            data:text
        })
}
export function analysis_tree(text) {
    if (text.replace(/[^0-9\u4e00-\u9fa5]/g,'')){//中文
        return fetch({
            url:"http://localhost:19999/nlp_ch/tree/",
            method:"post",
            data:text
        });
    }
    else//英文
        return fetch({
            url:"http://202.196.37.144:8898/nlp/nlp_en/tree/",
            method:"post",
            data:text
        })
}