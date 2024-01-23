/**
 * Adds the general palette to the sidebar.
 */
/*const addClassDiagramPalette = function (sb, expand) {

  // Reusable cells
  var field = new mxCell('+ field: type', new mxGeometry(0, 0, 100, 26), 'text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;whiteSpace=wrap;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;');
  var attributeField = new mxCell('+ field: type', new mxGeometry(0, 0, 100, 26), 'text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;whiteSpace=wrap;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;componentName=attribute');
  var methodField = new mxCell('+ method(type): type', new mxGeometry(0, 0, 100, 26), 'text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;whiteSpace=wrap;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;componentName=method');

  field.vertex = true;
  attributeField.vertex = true;
  methodField.vertex = true;

  var divider = new mxCell('', new mxGeometry(0, 0, 40, 8), 'line;html=1;strokeWidth=1;fillColor=none;align=left;verticalAlign=middle;spacingTop=-1;spacingLeft=3;spacingRight=3;rotatable=0;labelPosition=right;points=[];portConstraint=eastwest;');
  divider.vertex = true;

  // Default tags
  var dt = 'uml static class ';

  var fns = [  
    sb.addEntry(dt + 'object instance', function () {
      var cell = new mxCell('Classname', new mxGeometry(0, 0, 160, 90),
        'swimlane;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;');
      cell.vertex = true;
      cell.insert(field.clone());
      cell.insert(divider.clone());
      cell.insert(sb.cloneCell(field, '+ method(type): type'));

      return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Class');
    }),    
    sb.addEntry(dt + 'section subsection', function () {
      var cell = new mxCell('Classname', new mxGeometry(0, 0, 140, 110),
        'swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=none;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;');
      cell.vertex = true;
      cell.insert(field.clone());
      cell.insert(field.clone());
      cell.insert(field.clone());

      return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Class 2');
    }),
    sb.createVertexTemplateEntry('verticalAlign=top;align=left;overflow=fill;html=1;', 180, 90,
      '<div style="box-sizing:border-box;width:100%;background:#e4e4e4;padding:2px;">Tablename</div>' +
      '<table style="width:100%;font-size:1em;" cellpadding="2" cellspacing="0">' +
      '<tr><td>PK</td><td>uniqueId</td></tr><tr><td>FK1</td><td>' +
      'foreignKey</td></tr><tr><td></td><td>fieldname</td></tr></table>', 'Entity', null, null, 'er entity table'),
    sb.addEntry(dt + 'object instance', function () {
      var cell = new mxCell('<p style="margin:0px;margin-top:4px;text-align:center;">' +
        '<b>Class</b></p>' +
        '<hr size="1"/><div style="height:2px;"></div>', new mxGeometry(0, 0, 140, 60),
        'verticalAlign=top;align=left;overflow=fill;fontSize=12;fontFamily=Helvetica;html=1;');
      cell.vertex = true;

      return sb.createVertexTemplateFromCells([cell.clone()], cell.geometry.width, cell.geometry.height, 'Class 3');
    }),
    sb.addEntry(dt + 'object instance', function () {
      var cell = new mxCell('<p style="margin:0px;margin-top:4px;text-align:center;">' +
        '<b>Class</b></p>' +
        '<hr size="1"/><div style="height:2px;"></div><hr size="1"/><div style="height:2px;"></div>', new mxGeometry(0, 0, 140, 60),
        'verticalAlign=top;align=left;overflow=fill;fontSize=12;fontFamily=Helvetica;html=1;');
      cell.vertex = true;

      return sb.createVertexTemplateFromCells([cell.clone()], cell.geometry.width, cell.geometry.height, 'Class 4');
    }),
    sb.addEntry(dt + 'object instance', function () {
      var cell = new mxCell('<p style="margin:0px;margin-top:4px;text-align:center;">' +
        '<b>Class</b></p>' +
        '<hr size="1"/><p style="margin:0px;margin-left:4px;">+ field: Type</p><hr size="1"/>' +
        '<p style="margin:0px;margin-left:4px;">+ method(): Type</p>', new mxGeometry(0, 0, 160, 90),
        'verticalAlign=top;align=left;overflow=fill;fontSize=12;fontFamily=Helvetica;html=1;');
      cell.vertex = true;

      return sb.createVertexTemplateFromCells([cell.clone()], cell.geometry.width, cell.geometry.height, 'Class 5');
    }),
    sb.createVertexTemplateEntry(
      'text;html=1;align=center;fontStyle=1;verticalAlign=middle;spacingLeft=3;spacingRight=3;strokeColor=none;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;',
      80, 26, 'Title', 'Title', null, null, dt + 'title label'
    ),
    sb.createEdgeTemplateEntry('edgeStyle=orthogonalEdgeStyle;rounded=0;html=1;entryX=0.5;entryY=0;dashed=1;jettySize=auto;orthogonalLoop=1;', 160, 0, 'Description', 'Relationship', null, 'uml generalization extend'),
  ];

  sb.addPaletteFunctions('classDiagram', mxResources.get('classDiagram'), expand || false, fns);
}; */

/**
 * Adds the sequence diagram palette to the sidebar.
 */
const addSequenceDiagramPalette = function (sb, expand) {
  
  // Default tags
  var dt = 'uml sequence';

  var fns = [
    ////MUESTRA EL OBJETO PARA UN DIAGRAMA DE SECUENCIA
    sb.createVertexTemplateEntry(
      'rounded=0;whiteSpace=wrap;html=1;', // Estilo del vértice del objeto
      120, // Ancho del vértice en la paleta
      60, // Altura del vértice en la paleta
      '<div style="box-sizing:border-box;width:100%;background:#e4e4e4;padding:2px;text-align:center;">ObjectName</div>', // Contenido HTML del vértice
      'Object', // Etiqueta del vértice
      null, // Información adicional (puede ser null)
      null, // Estilo específico del vértice (puede ser null)
      dt + 'object' // Etiqueta específica para el tipo de objeto
    ), 
      // Entrada para la destruccion 
      sb.createVertexTemplateEntry(
        'shape=umlDestroy;whiteSpace=wrap;html=1;strokeWidth=3;targetShapes=umlLifeline;', // Estilo del vértice de destrucción
        30, // Ancho del vértice en la paleta
        20, // Altura del vértice en la paleta
        '', // Etiqueta del vértice
        '', // Descripción del vértice
        null, // Información adicional (puede ser null)
        'uml destroy' // Estilo específico del vértice
      ),

  // Entrada para una línea de vida
  sb.createVertexTemplateEntry(
    'shape=umlLifeline;perimeter=rectanglePerimeter;whiteSpace=wrap;html=1;',
    120, 400, 'Lifeline', 'Lifeline', null, 'uml lifeline'
  ),

    // Entrada para la instancia de una línea de vida
    sb.createVertexTemplateEntry(
      'shape=umlLifeline;perimeter=rectanglePerimeter;whiteSpace=wrap;html=1;',
      120, 400, 'Instance: Lifeline', 'Instance: Lifeline', null, 'uml instance lifeline'
    ),

    //Boundary lifeline
    sb.createVertexTemplateEntry(
      'shape=umlLifeline;perimeter=lifelinePerimeter;whiteSpace=wrap;html=1;container=1;dropTarget=0;collapsible=0;recursiveResize=0;outlineConnect=0;portConstraint=eastwest;newEdgeStyle={"curved":0,"rounded":0};participant=umlBoundary;fontSize=16;', // Estilo de la línea de vida con límites
      60, // Ancho del vértice en la paleta
      400, // Altura del vértice en la paleta
      '', // Etiqueta del vértice
      'Boundary Lifeline', // Estilo específico del vértice
      null, // Información adicional (puede ser null)
      'uml lifeline' // Estilo general del vértice
    ),

      //Entity lifeline
      sb.createVertexTemplateEntry(
        'shape=umlLifeline;whiteSpace=wrap;html=1;perimeter=lifelinePerimeter;container=1;dropTarget=0;collapsible=0;recursiveResize=0;outlineConnect=0;portConstraint=eastwest;newEdgeStyle={"curved":0,"rounded":0};participant=umlEntity;fontSize=16;', // Estilo de la línea de vida con límites
        60, // Ancho del vértice en la paleta
        400, // Altura del vértice en la paleta
        '', // Etiqueta del vértice
        'Entity Lifeline', // Estilo específico del vértice
        null, // Información adicional (puede ser null)
        'uml lifeline' // Estilo general del vértice
      ),

        //Control lifeline
    sb.createVertexTemplateEntry(
      'shape=umlLifeline;perimeter=lifelinePerimeter;whiteSpace=wrap;html=1;container=1;dropTarget=0;collapsible=0;recursiveResize=0;outlineConnect=0;portConstraint=eastwest;newEdgeStyle={"curved":0,"rounded":0};participant=umlControl;fontSize=16;', // Estilo de la línea de vida con límites
      60, // Ancho del vértice en la paleta
      400, // Altura del vértice en la paleta
      '', // Etiqueta del vértice
      'Control Lifeline', // Estilo específico del vértice
      null, // Información adicional (puede ser null)
      'uml lifeline' // Estilo general del vértice
    ),

    ////lifeline actor
    sb.createVertexTemplateEntry(
      'shape=umlLifeline;perimeter=lifelinePerimeter;whiteSpace=wrap;html=1;container=1;dropTarget=0;collapsible=0;recursiveResize=0;outlineConnect=0;portConstraint=eastwest;newEdgeStyle={"curved":0,"rounded":0};participant=umlActor;fontSize=16;', // Estilo de la línea de vida con límites
      20, // Ancho del vértice en la paleta
      400, // Altura del vértice en la paleta
      '', // Etiqueta del vértice
      'Actor Lifeline', // Estilo específico del vértice
      null, // Información adicional (puede ser null)
      'uml lifeline' // Estilo general del vértice
    ),

   // Entrada para la activación bar
   sb.createVertexTemplateEntry(
    'shape=umlActivationBar;whiteSpace=wrap;html=1;',
    20, 100, '', 'Activation Bar', null, 'uml activation bar'
  ),

  //Entrada para el actor
  sb.createVertexTemplateEntry(
    'shape=umlActor;whiteSpace=wrap;html=1;verticalAlign=top;labelPosition=bottom;verticalLabelPosition=bottom;align=center;spacingTop=-5;', 
    20, 50, 'Actor', 'Actor', null, null, 'uml actor'
),
 ////MUESTRA EL MENSAJE PARA UN DIAGRAMA DE SECUENCIA
 sb.createEdgeTemplateEntry('edgeStyle=orthogonalEdgeStyle;rounded=0;html=1;entryX=0.5;entryY=0;dashed=1;jettySize=auto;orthogonalLoop=1;'
 , 160, 0, 'Message', 'Sequence Message', null, dt + 'message'), 

  // Entrada para un mensaje asíncrono dispatch
  sb.createEdgeTemplateEntry(
    'shape=umlDispatch;edgeStyle=orthogonalEdgeStyle;rounded=0;html=1;exitX=0.5;exitY=0;exitDx=0;exitDy=0;exitPerimeter=0;entryX=0;entryY=0;entryDx=0;entryDy=0;entryPerimeter=0;',
    160, 0, 'Dispatch', 'Dispatch', null, 'uml dispatch'
  ),

  ///para callback
  sb.createEdgeTemplateEntry(
    'html=1;verticalAlign=bottom;endArrow=classic;curved=0;rounded=0;entryX=16;entryY=0;entryDx=16;entryDy=0;fontSize=0;startSize=12;',
    160, 0, '', 'Callback', null, 'uml callback'
  ),

  /// entrada para iniciar estado
  sb.createVertexTemplateEntry(
    'ellipse;html=1;shape=startState;fillColor=#000000;strokeColor=#ff0000;fontSize=16;edgeStyle=orthogonalEdgeStyle;html=1;verticalAlign=bottom;endArrow=open;endSize=8;strokeColor=#ff0000;rounded=0;fontSize=12;curved=1;',
    30, 30, '', 'Start Node', null, 'uml start state'
  ),
/// entrada para finalizar estado
  sb.createVertexTemplateEntry(
    'ellipse;html=1;shape=endState;fillColor=#000000;strokeColor=#ff0000;fontSize=16;',
    30, 30, '', 'End Node', null, 'uml end state'
  ),


   ///para frame loop
  sb.createVertexTemplateEntry(
    'shape=umlFrame;whiteSpace=wrap;html=1;', // Estilo del vértice del objeto
    500, // Ancho del vértice en la paleta
    300, // Altura del vértice en la paleta
    '<div style="box-sizing:border-box;width:100%;background:#e4e4e4;padding:2px;text-align:center;">Loop</div>', // Contenido HTML del vértice
    'Loop', // Etiqueta del vértice
    null, // Información adicional (puede ser null)
    null, // Estilo específico del vértice (puede ser null)
    dt + 'object' // Etiqueta específica para el tipo de objeto
  ),

     ///para frame critical
     sb.createVertexTemplateEntry(
      'shape=umlFrame;whiteSpace=wrap;html=1;', // Estilo del vértice del objeto
      500, // Ancho del vértice en la paleta
      300, // Altura del vértice en la paleta
      '<div style="box-sizing:border-box;width:100%;background:#e4e4e4;padding:2px;text-align:center;">Critical</div>', // Contenido HTML del vértice
      'Critical', // Etiqueta del vértice
      null, // Información adicional (puede ser null)
      null, // Estilo específico del vértice (puede ser null)
      dt + 'object' // Etiqueta específica para el tipo de objeto
    ),
     ///para frame alternative
     sb.createVertexTemplateEntry(
      'shape=umlFrame;whiteSpace=wrap;html=1;', // Estilo del vértice del objeto
      500, // Ancho del vértice en la paleta
      300, // Altura del vértice en la paleta
      '<div style="box-sizing:border-box;width:100%;background:#e4e4e4;padding:2px;text-align:center;">Alternative</div>', // Contenido HTML del vértice
      'Alternative', // Etiqueta del vértice
      null, // Información adicional (puede ser null)
      null, // Estilo específico del vértice (puede ser null)
      dt + 'object' // Etiqueta específica para el tipo de objeto
    ),
         ///para frame option
         sb.createVertexTemplateEntry(
          'shape=umlFrame;whiteSpace=wrap;html=1;', // Estilo del vértice del objeto
          500, // Ancho del vértice en la paleta
          300, // Altura del vértice en la paleta
          '<div style="box-sizing:border-box;width:100%;background:#e4e4e4;padding:2px;text-align:center;">Option</div>', // Contenido HTML del vértice
          'Option', // Etiqueta del vértice
          null, // Información adicional (puede ser null)
          null, // Estilo específico del vértice (puede ser null)
          dt + 'object' // Etiqueta específica para el tipo de objeto
        ),

             ///para frame break
     sb.createVertexTemplateEntry(
      'shape=umlFrame;whiteSpace=wrap;html=1;', // Estilo del vértice del objeto
      500, // Ancho del vértice en la paleta
      300, // Altura del vértice en la paleta
      '<div style="box-sizing:border-box;width:100%;background:#e4e4e4;padding:2px;text-align:center;">Break</div>', // Contenido HTML del vértice
      'Break', // Etiqueta del vértice
      null, // Información adicional (puede ser null)
      null, // Estilo específico del vértice (puede ser null)
      dt + 'object' // Etiqueta específica para el tipo de objeto
    ),
  ];
  //ellipse;html=1;shape=startState;fillColor=#000000;strokeColor=#ff0000;fontSize=16;

  sb.addPaletteFunctions('sequenceDiagram', mxResources.get('sequenceDiagram'), expand || false, fns);
};

module.exports = addSequenceDiagramPalette;


//module.exports = addClassDiagramPalette;