/* global describe:false */
import { chai } from '@environment-safe/chai';
import { it } from '@open-automaton/moka';
import { ValueNoise } from '../src/index.mjs';
import { nByM, deepEqual, sampleOutput} from './util/util.mjs';
const should = chai.should();

describe('module', ()=>{
    describe('performs a simple test suite', ()=>{
        it('loads', async ()=>{
            const perlin = new ValueNoise('dkjfdsjh');
            const matrix = nByM(perlin, 5, 5);
            should.exist(matrix);
            //console.log(matrix)
            //console.log(sampleOutput)
            sampleOutput.length.should.equal(matrix.length);
            sampleOutput[0].should.deep.equal(matrix[0]);
            sampleOutput[1].should.deep.equal(matrix[1]);
            sampleOutput[2].should.deep.equal(matrix[2]);
            //console.log(sampleOutput[3], matrix[3])
            //shouldDeepEqual(sampleOutput[3], matrix[3] )
            deepEqual(sampleOutput, matrix ).should.equal(true);
            //sampleOutput[3].should.deep.equal(matrix[3]);
            //JSON.stringify(matrix).should.equal(JSON.stringify(sampleOutput));
        });
    });
});

