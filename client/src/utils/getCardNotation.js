export default (props) => {
    let cardNotation ="";
    switch(props.rank){
        case 1:{
            cardNotation+='A';
            break;
        }
        case 11:
            cardNotation+='J';
            break;
        case 12:
            cardNotation+='Q';
            break;
        case 13:
            cardNotation+='K';
            break;
        default:
            cardNotation+=props.rank;
            break;
    }
    switch(props.suit){
        case 'clubs':
            cardNotation+='C';
            break;
        case 'diamonds':
            cardNotation+='D';
            break;
        case 'hearts':
            cardNotation+='H';
            break;
        case 'spades':
            cardNotation+='S';
            break;
        default:
            break;

    }
    return cardNotation;
}