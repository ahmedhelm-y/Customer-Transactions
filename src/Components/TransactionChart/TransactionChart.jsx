
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function TransactionChart({ transactions }) {

    let data = transactions.reduce((acc, transaction) => {

        let date = transaction.date;
        let existing = acc.find(item => item.date === date);

        // Check for the date to calculate the total amount for the day
        if (existing) {
            existing.amount += transaction.amount;
        } else {
            acc.push({ date, amount: transaction.amount });
        }

        return acc;
    }, []);


    return <>
            <BarChart
                width={600}
                height={300}
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="amount" fill="#1cc79fc5" />
            </BarChart>
    </>
}