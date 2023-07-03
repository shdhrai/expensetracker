import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = props=> {
    
    if(props.fexpenses.length === 0){
        return <h2 className="expenses-list__fallback">Found no Expenses.</h2>;
    }
    // If View of your compnent changes completly then use this approach otherwise conditional approach works good.
    
    return(
        <ul className="expenses-list">
            {
                props.fexpenses.map((e) =>
                    (
                      <ExpenseItem
                        key={Math.random() * 100}
                        title={e.title}
                        amount={e.amount}
                        date={e.date}
                      />
                    )
                )
            }
        </ul>
    );
};

export default ExpensesList;