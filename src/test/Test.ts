import calculate from '../main/Calculator';
import IterableVariable from '../main/IterableVariable';
import { Getter, VariableBooleanPair } from '../main/types';

function iteravleVariableTest() {
    const iterVar: IterableVariable = new IterableVariable();
    const vars: string[] = ['A', 'B', 'C'];
    
    for(var v of vars) {
        iterVar.register(v);
    }

    const getters: { [key: string]: Getter } = vars.map(v => ({
        [v]: iterVar.getter(v)
    })).reduce((p, c) => ({ ...p, ...c }));
    
    var idx: number = 1;
    do {
        console.log(`(${idx++})\t` + vars.map(v => `${v} : ${getters[v]()}`).join(',\t'))
    } while (iterVar.increase());
}

function test() {
    const tc = 'A And True';
    Promise.all([calculate(tc)])
        .then(([result]) => {
            console.log(tc);
            for (var r of result) {
                let v = r.variables;
                const variableValueMap = r.variables as VariableBooleanPair;
                if (typeof v !== 'string') {
                    v = Object.keys(variableValueMap).map(v => `${v} : ${variableValueMap[v]}`).join(',\t');
                }
                console.log(`${v}\t// Result : ${r.result}`);
            }
        });
}


test();