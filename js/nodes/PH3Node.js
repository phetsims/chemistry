// Copyright 2002-2013, University of Colorado

/**
 * PH3 Molecule
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
    var bigNode = new AtomNode( Element.P );
    var smallLeftNode = new AtomNode( Element.H );
    var smallRightNode = new AtomNode( Element.H );
    var smallBottomNode = new AtomNode( Element.H );

    // rendering order
    var parentNode = new Node();
    this.addChild( parentNode );
    parentNode.addChild( smallLeftNode );
    parentNode.addChild( smallRightNode );
    parentNode.addChild( bigNode );
    parentNode.addChild( smallBottomNode );

    // layout
    var x = 0;
    var y = 0;
    bigNode.setTranslation( x, y );
    x = bigNode.left;
    y = bigNode.bottom - ( 0.25 * bigNode.height );
    smallLeftNode.setTranslation( x, y );
    x = bigNode.right;
    y = smallLeftNode.y;
    smallRightNode.setTranslation( x, y );
    x = bigNode.x;
    y = bigNode.bottom;
    smallBottomNode.setTranslation( x, y );

    // move origin to geometric center
    parentNode.center = Vector2.ZERO;
  } );
} );