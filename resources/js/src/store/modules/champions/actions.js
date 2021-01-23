import champion from "../../../apis/champions";

export const fetchChampions = ({ commit }) => {
    let shen = [];
    let yasuo = [];
    let yone = [];
    let champions = [];

    champion.shen().then(res => {
        // console.log(res.data.data.Shen);
        let arr = [];

        // arr.push(res.data.data.Shen);
        shen.push(res.data.data.Shen);
        // shen.push(arr);
        console.log(shen[0][0]);
    });

    champion.yasuo().then(res => {
        yasuo.push(res.data.data.Yasuo);
    });

    champion.yone().then(res => {
        yone.push(res.data.data.Yone);
    });

    // champions.push(...shen, ...yasuo, ...yone);
    // champions.push(shen, ...yasuo);
    // champions.push(yasuo);
    // champions.push(yone);
    // champions.push(shen);
    // champions.push(...yasuo);
    // let obj = {
    //     yasuo: yasuo,
    //     shen: shen,
    //     yone: yone
    // };

    // champions.push(obj);
    // champions.map(x => console.log(x));
    // Array.prototype.push.apply(shen, yasuo);
    // console.log(shen);

    // champions.push.apply(shen, yone, yasuo);
    // console.log(champions);
    // console.log([shen][0]);
    for (let x in shen[0]) console.log(x);
};
