module.exports = ['$scope','$location', '$routeParams', '$modal',  function ($scope, $location, $routeParams, $modal) {
	$scope.about = false;
	$scope.burga = false;
	$scope.intro = true;
	$scope.skills = false;
	$scope.technical = false;
	$scope.creative = true;
	$scope.creativegraph = false;
	$scope.technicagraph = false;
	$scope.creativegraphfast = false;

	$scope.skillOpen = function(){
		$('#skills').delay(500).fadeIn(300, function() {
			$('#skills').delay(1000).queue(function(next){
				$('#skills').addClass("showSection");
				$('#skills').dequeue();
			});
			$('#illustrator').delay(1200).queue(function(next){
				$('#illustrator').addClass('skillopen');
				$('#illustrator').dequeue();
			});
			$('#sketch').delay(1400).queue(function(next){
				$('#sketch').addClass('skillopen');
				$('#sketch').dequeue();
			});
			$('#photoshop').delay(1600).queue(function(next){
				$('#photoshop').addClass('skillopen');
				$('#photoshop').dequeue();
			});
			$('#lucid').delay(1800).queue(function(next){
				$('#lucid').addClass('skillopen');
				$('#lucid').dequeue();
			});
			$('#balsamiq').delay(2000).queue(function(next){
				$('#balsamiq').addClass('skillopen');
				$('#balsamiq').dequeue();
			});
			$('#invision').delay(2200).queue(function(next){
				$('#invision').addClass('skillopen');
				$('#invision').dequeue();
			});
			$('#indesign').delay(2400).queue(function(next){
				$('#indesign').addClass('skillopen').finish();
				$('#indesign').dequeue();
			});
		});
	}

	$scope.closeGraph = function(){
	var creativebar = $(".creativebar");
			var skillopen = $( ".skillcircle" );
			var bartext = $( ".creativebartext" );
			$(bartext).fadeOut(100);
			$(creativebar).addClass('barclosed');
			$('#creativex').fadeOut(200); 
			$('#creativexy').fadeOut(200, function(){
				$('#graphbottom').removeClass('go');
				$('#creativegraph').fadeOut(200, function(){
					$('#skillcontain').removeClass('graphholder');
					$('#creativecirlcecontain').fadeIn(300, function() {
						$('#illustrator').addClass('skillopen').next().addClass('skillopen').next().addClass('skillopen').next().addClass('skillopen').dequeue().clearQueue().finish();
						$('#balsamiq').addClass('skillopen').next().addClass('skillopen').next().addClass('skillopen').dequeue().clearQueue().finish();
					});
				});
			});
			stop('fx', true, true);
			$scope.creativegraph = false;
			$scope.creativegraphfast = true;
			console.log('close graph open circles');
	}
	$scope.openGraph = function (){
			var barclosed = $(".barclosed");
			var skillopen = $( ".skillcircle" );
			var bartext = $( ".creativebartext" );
			var xytext = $( ".xytext" );
			$('#skillcontain').addClass('graphholder');
			$('#graphbottom').delay(50).queue(function(next){
				$('#graphbottom').addClass('go');
				$('#graphbottom').dequeue();
			});
			$(skillopen).delay(100).queue(function(next){
				$(skillopen).removeClass('skillopen');
				$(skillopen).dequeue();
			});
			$('#creativecirlcecontain').fadeOut(300, function() {
				$('#creativegraph').fadeIn(50, function() {
					$('#creativex').fadeIn(200); 
					$('#creativexy').fadeIn(200, function(){
						$(barclosed).delay(500).queue(function(next){
							$(barclosed).removeClass('barclosed');
							$(barclosed).dequeue();
						});
						$(bartext).delay(600).queue(function(next){
							$(bartext).fadeIn(200);
							$(bartext).dequeue();
						});
					});
				});
			});
			stop('fx', true, true);
			$scope.creativegraph = true;
			console.log('open graph close circles');
	}
	$scope.openGraphTech = function (){
			var technicalbarclosed = $(".technicalbarclosed");
			var skillopen = $( ".skillcircle" );
			var technicalbartext = $( ".technicalbartext" );
			var xytext = $( ".xytext" );
			$('#technicalskillcontain').addClass('technicalgraphholder');
			$('#technicalgraphbottom').delay(50).queue(function(next){
				$('#technicalgraphbottom').addClass('go');
				$('#technicalgraphbottom').dequeue();
			});
			$(skillopen).delay(100).queue(function(next){
				$(skillopen).removeClass('skillopen');
				$(skillopen).dequeue();
			});
			$('#technicalcirlcecontain').fadeOut(300, function() {
				$('#technicalgraph').fadeIn(50, function() {
					$('#technicalx').fadeIn(200); 
					$('#technicalxy').fadeIn(200, function(){
						$(technicalbarclosed).delay(500).queue(function(next){
							$(technicalbarclosed).removeClass('technicalbarclosed');
							$(technicalbarclosed).dequeue();
						});
						$(technicalbartext).delay(600).queue(function(next){
							$(technicalbartext).fadeIn(200);
							$(technicalbartext).dequeue();
						});
					});
				});
			});
			stop('fx', true, true);
			$scope.technicalgraph = true;
			console.log('open graph close circles');
	}
	$scope.openCircles =function (){
		var skillopen = $( ".skillcircle" );
			$(skillopen).removeClass('skillopen').delay(50).queue(function(next){
				$('#technicalskills').dequeue().fadeOut(300, function() {
				$('#creativeskills').fadeIn(50, function() {
					$('#illustrator').addClass('skillopen').next().addClass('skillopen').next().addClass('skillopen').next().addClass('skillopen').clearQueue().finish();
					$('#balsamiq').addClass('skillopen').next().addClass('skillopen').next().addClass('skillopen').clearQueue().finish();
					});		
				});
			});
			stop('fx', true, true);
			$scope.creative = true;
			$scope.technical = false;
			console.log('open creative circles');	
	}
	$scope.openCirclesTech =function (){
		var skillopen = $( ".skillcircle" );
			$(skillopen).removeClass('skillopen').delay(50).queue(function(next){
				$('#creativeskills').dequeue().fadeOut(300, function() {
					$('#technicalskills').fadeIn(50, function() {
						$('#html').addClass('skillopen').next().addClass('skillopen').next().addClass('skillopen').next().addClass('skillopen').next().addClass('skillopen').clearQueue().finish();
						$('#less').addClass('skillopen').next().addClass('skillopen').next().addClass('skillopen').next().addClass('skillopen').clearQueue().finish();
					});		
				});
			});
			stop('fx', true, true);
			$scope.creative = false;
			$scope.technical = true;
			console.log('open creative circles');	
	}


	$scope.creativeOpen = function(){
		if($scope.creative === true && $scope.technical === false && $scope.creativegraph === true ){
			$scope.closeGraph();
		}
		else if($scope.creative === true && $scope.technical === false ){
			$scope.openGraph();
		}
		else if($scope.creative === false){
			$scope.openCircles();
		}
	}
	$scope.technicalOpen = function() {
		if($scope.technical === false){
			$scope.openCirclesTech();
		}
		else if($scope.creative === false && $scope.technical === true ){
			$scope.openGraphTech();
		}
	}


	$(function(){
		if ($scope.about === false) {
			textOne = setTimeout(function(){
				firstText();
			}, 500);
			textTwo = setTimeout(function(){
				secondText();
			}, 1000);
			textThree = setTimeout(function(){
				thirdText();
			}, 1500);

			function firstText(){
				$('#text1').addClass("text1");
			}
			function secondText(){
				$('#text2').addClass("text2");
			}
			function thirdText(){
				$('#text3').addClass("text3");
			}
		}
	})
}];
