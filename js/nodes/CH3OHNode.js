// Copyright 2002-2015, University of Colorado

/**
 * CH3OH Molecule
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var AtomNode = require( 'NITROGLYCERIN/nodes/AtomNode' );
  var Element = require( 'NITROGLYCERIN/Element' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );
  var Vector2 = require( 'DOT/Vector2' );

  /**
   * @param {Object} [options]
   * @constructor
   */
  function CH3OHNode( options ) {

    options = _.extend( { atomOptions: {} }, options );

    // atoms
    var leftNode = new AtomNode( Element.C, options.atomOptions );
    var smallTopNode = new AtomNode( Element.H, _.extend( {
      x: leftNode.x,
      y: leftNode.top
    }, options.atomOptions ) );
    var smallBottomNode = new AtomNode( Element.H, _.extend( {
      x: smallTopNode.x,
      y: leftNode.bottom
    }, options.atomOptions ) );
    var smallLeftNode = new AtomNode( Element.H, _.extend( {
      x: leftNode.left,
      y: leftNode.y
    }, options.atomOptions ) );
    var rightNode = new AtomNode( Element.O, _.extend( {
      x: leftNode.right + ( 0.25 * leftNode.width ),
      y: leftNode.y
    }, options.atomOptions ) );
    var smallRightNode = new AtomNode( Element.H, _.extend( {
      x: rightNode.right,
      y: rightNode.y
    }, options.atomOptions ) );

    options.children = [ new Node( {
      children: [ smallBottomNode, smallTopNode, leftNode, smallLeftNode, smallRightNode, rightNode ],
      center: Vector2.ZERO // origin at geometric center
    } ) ];
    Node.call( this, options );
  }

  return inherit( Node, CH3OHNode );
} );
