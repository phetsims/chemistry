// Copyright 2002-2013, University of Colorado

/**
 * PCl5 Molecule
 * Structure has 2 H's on the vertical axis, and 3 H's arranged in a triangle in the horizontal plane.
 *
 * @author Chris Malley (cmalley@pixelzoom.com)
 */

define( function ( require ) {
  'use strict';

  var inherit = require( 'PHET_CORE/inherit' );
  var AtomNode = require( 'NITROGLYCERIN/nodes/AtomNode' );
  var Node = require( 'SCENERY/nodes/Node' );
  var Vector2 = require( 'DOT/Vector2' );
  var Element = require( 'NITROGLYCERIN/Element' );

  return inherit( Node, function CNode() {
    Node.call( this, {} );

    // atom nodes
    var centerNode = new AtomNode( Element.P );
    var topNode = new AtomNode( Element.Cl );
    var bottomNode = new AtomNode( Element.Cl );
    var rightNode = new AtomNode( Element.Cl );
    var topLeftNode = new AtomNode( Element.Cl );
    var bottomLeftNode = new AtomNode( Element.Cl );

    // rendering order
    var parentNode = new Node();
    this.addChild( parentNode );
    parentNode.addChild( rightNode );
    parentNode.addChild( bottomNode );
    parentNode.addChild( topLeftNode );
    parentNode.addChild( centerNode );
    parentNode.addChild( topNode );
    parentNode.addChild( bottomLeftNode );

    // layout
    var x = 0;
    var y = 0;
    centerNode.setTranslation( x, y );
    x = centerNode.centerX;
    y = centerNode.top;
    topNode.setTranslation( x, y );
    x = centerNode.centerX;
    y = centerNode.bottom;
    bottomNode.setTranslation( x, y );
    x = centerNode.right;
    y = centerNode.centerY;
    rightNode.setTranslation( x, y );
    x = centerNode.left + ( 0.25 * centerNode.width );
    y = centerNode.top + ( 0.25 * centerNode.height );
    topLeftNode.setTranslation( x, y );
    x = centerNode.left + ( 0.1 * centerNode.width );
    y = centerNode.bottom - ( 0.1 * centerNode.height );
    bottomLeftNode.setTranslation( x, y );

    // move origin to geometric center
    parentNode.center = Vector2.ZERO;
  } );
} );