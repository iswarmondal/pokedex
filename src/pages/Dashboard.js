import BottomSearchIcon from '../components/BottomSearchIcon';
import CardBox from '../components/CardBox';
import TopTitleBar from '../components/TopTitleBar';

function Dashboard() {
  return (
    <div className='min-h-screen flex flex-col justify-between'>
        <TopTitleBar>Dashboard</TopTitleBar>
        <div className='p-4 bg-slate-100 dark:bg-slate-800 grow'>
            <CardBox data={['data1', 'data2', 'data3', 'data4', 'data5', 'data6','datax','datax','datax','datax']} />
        </div>
        <BottomSearchIcon />
    </div>
  )
}

export default Dashboard