let chocolate = 10 // escopo global

function calcularDesconto(valorCompra) {
    let desconto = 0 // escopo de função

    if (valorCompra >= 100) {
        desconto = valorCompra * 0.10
    }
    valorFinal = valorCompra - desconto

    return {
        valorCompra,
        desconto,
        valorFinal
    }
}

console.log(calcularDesconto(1200));
