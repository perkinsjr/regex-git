import test from 'ava';
import x from './';

test("Url", t => {
	t.true(x.test('https://github.com/perkinsjr/regex-git.git'));
    t.false(x.test('git@github.com:perkinsjr/regex-git'));
    t.true(x.test('git@github.com:perkinsjr/regex-git.git'));
});