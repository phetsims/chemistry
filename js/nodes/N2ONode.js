// Copyright 2002-2013, University of Colorado

/**
 * N2O Molecule
 *
 * @author Chris Malley (cmalley@pixelzoom.com)
 */

define( function ( require ) {
  'use strict';

  var inherit = require( 'PHET_CORE/inherit' );
  var HorizontalMoleculeNode = require( 'NITROGLYCERIN/nodes/HorizontalMoleculeNode' );
  var Element = require( 'NITROGLYCERIN/Element' );

  return inherit( HorizontalMoleculeNode, function N2ONode() {
    HorizontalMoleculeNode.call( this, Element.N, Element.N, Element.O );
  } );
} );
