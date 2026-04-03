export function usePriceCalculator(questions, answers) {
    const calculateTotal = () => {
        let total = 0;

        questions.forEach(q => {
            if(q.type === "radio") {
                total += answers[q.id]?.price || 0 ;
            }else {
                (answers[q.id] || []).forEach(item => {
                    total += item.price
                })
            } 
        });
        return total;
    }
    return { calculateTotal };
}