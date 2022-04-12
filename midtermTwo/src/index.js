import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { MidtermExamHeader, Problem } from './ExamComponents';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {Problem as Problem1, description as problem1Description, video as problem1video} from './problems/problem_1';
import {Problem as Problem2, description as problem2Description, video as problem2video} from './problems/problem_2';
import {Problem as Problem3, description as problem3Description, video as problem3video} from './problems/problem_3';
import {Problem as Problem4, description as problem4Description, video as problem4video} from './problems/problem_4';
import {Problem as Problem5, description as problem5Description, video as problem5video} from './problems/problem_5';

const EXAM_NAME = 'SI 579 Midterm 2';
const SHORT_EXAM_NAME = 'Midterm Exam 2';
const EXAM_LINK = 'https://umich.instructure.com/courses/517385/assignments/1602807';
const due = new Date('Mon April 4 2022 17:50:00 GMT-0400 (Eastern Daylight Time)');
const YOUR_NAME = 'Anna Li';
const YOUR_UNIQNAME = 'annaleee';
const DEMO_LINK = 'https://capable-bubblegum-a49798.netlify.app/';
const instructions = `
# 

Complete all of the questions below. Aside from updating the YOUR_NAME and YOUR_UNIQNAME variables on lines 16-17 of \`src/index.js\` **You will only need to edit the files under the \`src/problems/\` directory.**  

When you are done, zip the entire directory **BUT WITH node_modules REMOVED** and submit as an upload with the filename \`<your_uniqname>_midterm_2.zip\` In the [${SHORT_EXAM_NAME} assignment](${EXAM_LINK}).

*The names / filenames / node_module removal steps will be factored into your score. `;

ReactDOM.render(<>
    <Helmet>
        <title>{EXAM_NAME}: {YOUR_NAME} ({YOUR_UNIQNAME})</title>
    </Helmet>
    <MidtermExamHeader name={`${EXAM_NAME}: ${YOUR_NAME} (${YOUR_UNIQNAME})`} shortName={SHORT_EXAM_NAME} link={EXAM_LINK} due={due} instructions={instructions} demo={DEMO_LINK}/>
    <main>
        <Problem number={1} description={problem1Description} video={problem1video}><Problem1 /></Problem>
        <Problem number={2} description={problem2Description} video={problem2video}><Problem2 initial={1} min={0} max={10} /></Problem>
        <Problem number={3} description={problem3Description} video={problem3video}><Problem3 /></Problem>
        <Problem number={4} description={problem4Description} video={problem4video}><Problem4 /></Problem>
        <Problem number={5} description={problem5Description} video={problem5video}><Problem5 /></Problem>
    </main>
</>, document.getElementById('root'));