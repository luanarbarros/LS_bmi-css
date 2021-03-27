const parametros = {
    feminino: [19.1, 25.8, 27.3, 32.3, 1000],
    masculino: [20.7, 26.4, 27.8, 31.1, 1000],
    classe: ['border-warning bg-warning text-white',
          'border-sucess bg-success text-white',
          'border-warning bg-warning text-white',
          'border-warning bg-warning text-white',
          'border-danger bg-danger text-white'],
    status: ['Abaixo do Peso',
             'Peso Normal',
             'Marginalmente Acima do Peso',
             'Acima do Peso Ideal',
             'Obeso']
};

const classesFixa = 'form-control form-control-lg border ';

function calculadoraDeIMC()
{
    const alturaElemento = document.querySelector('input[name=altura]');
    const pesoElemento = document.querySelector('input[name=peso]');
    const sexoElemento = document.querySelector('input[name=sexo]:checked');
    const imcElemento = document.querySelector('#imc');
    
    peso = parseFloat(pesoElemento.value);
    altura = parseFloat(alturaElemento.value);
    sexo = sexoElemento.value;

    var imc = peso / (altura**2);

    valores = parametros[sexo];

    for(var i = 0; i < 5; i++)
    {
        if (imc < valores[i])
        {
            classeString = classesFixa + parametros.classe[i];
            imcElemento.value = parametros.status[i];
            imcElemento.className = classeString
            // imcElemento.setAttribute('class', classeString);
            // imcElemento.setAttribute('value', parametros.status[i]);
            return;
        }
    }
}

function reset()
{
    const alturaElemento = document.querySelector('input[name=altura]');
    const pesoElemento = document.querySelector('input[name=peso]');
    const sexoElemento = document.getElementById('masculino');
    const imcElemento = document.querySelector('#imc');

    alturaElemento.value = '';
    pesoElemento.value = '';
    sexoElemento.checked = true;
    // imcElemento.setAttribute('class', classesFixa);
    imcElemento.className = classesFixa;
    imcElemento.value = '';
}

document.addEventListener('keyup', function(event) {
    if (event.key == 'Escape') {
        reset();
    } else if (event.key == 'Enter') {
        calculadoraDeIMC();
    }
  })