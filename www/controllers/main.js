module.exports = ['$scope','$location', '$routeParams', '$modal',  function ($scope, $location, $routeParams, $modal) {
	$scope.about = false;
	$scope.burga = false;
	$scope.intro = true;
	$scope.skills = false;
	$scope.technical = false;
	$scope.creative = true;
	$scope.creativegraph = false;
	$scope.creativefast = false;

	$scope.skillOpen = function(){
		$('#skills').delay(500).fadeIn(300, function() {
			$('#skills').delay(300).addClass("showSection").delay(300).queue(function(next){
				$('#illustrator').addClass('skillopen').delay(200).queue(function(next){
					$('#sketch').addClass('skillopen').delay(200).queue(function(next){
						$('#photoshop').addClass('skillopen').delay(200).queue(function(next){
							$('#lucid').addClass('skillopen').delay(200).queue(function(next){
								$('#balsamiq').addClass('skillopen').delay(200).queue(function(next){
									$('#invision').addClass('skillopen').delay(200).queue(function(next){
										$('#indesign').addClass('skillopen').stop('fx', true, true);
									});
								});
							});
						});
					});
				});
			});
		});
	}
	$scope.closeGraph = function(){
	var creativebar = $(".creativebar");
			var skillopen = $( ".skillcircle" );
			var bartext = $( ".creativebartext" );
			
			$(bartext).fadeOut(100, function(){
				$(creativebar).addClass('barclosed').delay(600).clearQueue().finish().queue(function(){
					$('#creativex').fadeOut(200).dequeue().clearQueue().finish(); 
					$('#creativexy').fadeOut(200, function(){
						$('#graphbottom').removeClass('go');
						$('#skillcontain').removeClass('graphholder');
						$('#creativecirlcecontain').fadeIn(300, function() {
							$('#illustrator').addClass('skillopen').next().addClass('skillopen').next().addClass('skillopen').next().addClass('skillopen').dequeue().clearQueue().finish();
							$('#balsamiq').addClass('skillopen').next().addClass('skillopen').next().addClass('skillopen').dequeue().clearQueue().finish();
						});
					});
				});	
			});
			stop('fx', true, true);
			$scope.creativegraph = false;
			console.log('close graph open circles');
	}
	$scope.closeGraphFast = function(){
	var creativebar = $(".creativebar");
	var skillopen = $( ".skillcircle" );
	var bartext = $( ".creativebartext" );
	$(bartext).fadeOut(100, function(){
		$(creativebar).addClass('barclosed');
			$('#creativex').fadeOut(200); 
			$('#creativexy').fadeOut(200);
				$('#graphbottom').removeClass('go');
				$('#skillcontain').removeClass('graphholder');
	});
	stop('fx', true, true);
	console.log('close graph open circles');
	}
	$scope.openGraph = function (){
			var barclosed = $(".barclosed");
			var skillopen = $( ".skillcircle" );
			var bartext = $( ".creativebartext" );
			var xytext = $( ".xytext" );
			$('#skillcontain').addClass('graphholder');
			$('#graphbottom').addClass('go').delay(50).queue(function(next){
					$(skillopen).removeClass('skillopen').dequeue().delay(50).queue(function(next){
						$('#creativecirlcecontain').fadeOut(300, function() {
							$('#creativegraph').fadeIn(50, function() {
								$(xytext).fadeIn(200, function() {
									$(barclosed).removeClass('barclosed').delay(50).queue(function(next){
										$(bartext).fadeIn(100).clearQueue().finish();
									});
								});
							});
						});
					});
			});
			stop('fx', true, true);
			$scope.creativegraph = true;
			$scope.creativefast = true;
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
	$scope.fastCircleClose = function (){
		$('#illustrator').removeClass('skillopen').next().removeClass('skillopen').next().removeClass('skillopen').next().removeClass('skillopen');
		$('#balsamiq').removeClass('skillopen').next().removeClass('skillopen').next().removeClass('skillopen');			
	}
	$scope.creativeOpen = function(){
		if($scope.creative === true && $scope.technical === false && $scope.creativegraph === true && $scope.creativefast === false){
			$scope.closeGraph();
		}
		if($scope.creative === true && $scope.technical === false && $scope.creativegraph === true && $scope.creativefast === true){
			$scope.closeGraphFast();
			$scope.openCircles();
		}
		else if($scope.creative === true && $scope.technical === false && $scope.creativefast === false){
			$scope.openGraph();
		}
		else if($scope.creative === false && $scope.creativefast === false){
			$scope.openCircles();
		}
		else if($scope.creative === true && $scope.technical === false && $scope.creativegraph === true && $scope.creativefast === true){
			$scope.fastCircleClose();
		}
	}
	$scope.technicalOpen = function() {
		if($scope.technical === false){
			var skillopen = $( ".skillcircle" );
			$('#illustrator').removeClass('skillopen').next().removeClass('skillopen').next().removeClass('skillopen').next().removeClass('skillopen');
					$('#balsamiq').removeClass('skillopen').next().removeClass('skillopen').next().removeClass('skillopen').delay(50).queue(function(next){
				$('#creativeskills').fadeOut(300, function() {
					$('#technicalskills').fadeIn(50, function() {
						$('#html').addClass('skillopen').next().addClass('skillopen').next().addClass('skillopen').next().addClass('skillopen').next().addClass('skillopen').clearQueue().finish();
						$('#less').addClass('skillopen').next().addClass('skillopen').next().addClass('skillopen').next().addClass('skillopen').clearQueue().finish();
					});		
				});
			});
			$scope.technical = true;
			$scope.creative = false;
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
