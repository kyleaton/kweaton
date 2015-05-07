module.exports = ['$scope','$location', '$routeParams', '$modal',  function ($scope, $location, $routeParams, $modal) {
	$scope.about = false;
	$scope.burga = false;
	$scope.intro = true;
	$scope.skills = false;

	$scope.skillOpen = function(){
		$('#skills').delay(500).fadeIn(300, function() {
			$('#skills').delay(300).addClass("showSection").delay(300).queue(function(next){
				$('#illustrator').addClass('skillopen').delay(200).queue(function(next){
					$('#sketch').addClass('skillopen').delay(200).queue(function(next){
						$('#photoshop').addClass('skillopen').delay(200).queue(function(next){
							$('#lucid').addClass('skillopen').delay(200).queue(function(next){
								$('#balsamiq').addClass('skillopen').delay(200).queue(function(next){
									$('#invision').addClass('skillopen').delay(200).queue(function(next){
										$('#indesign').addClass('skillopen');
									});
								});
							});
						});
					});
				});
			});
		});
	}

	$scope.creativeOpen = function(){
		var skillopen = $( ".skillopen" );
		$(skillopen).removeClass('skillopen').delay(50).queue(function(next){
			$('#technicalskills').fadeOut(300, function() {
			$('#creativeskills').fadeIn(50, function() {
				$('#illustrator').addClass('skillopen').next().addClass('skillopen').next().addClass('skillopen').next().addClass('skillopen').stop( true );
				$('#balsamiq').addClass('skillopen').next().addClass('skillopen').next().addClass('skillopen').stop( true );
				});		
			});
		});
	}
	$scope.technicalOpen = function() {
		var skillopen = $( ".skillopen" );
		$('#illustrator').removeClass('skillopen').next().removeClass('skillopen').next().removeClass('skillopen').next().removeClass('skillopen');
				$('#balsamiq').removeClass('skillopen').next().removeClass('skillopen').next().removeClass('skillopen').delay(50).queue(function(next){
			$('#creativeskills').fadeOut(300, function() {
			$('#technicalskills').fadeIn(50, function() {
				$('#html').addClass('skillopen').next().addClass('skillopen').next().addClass('skillopen').next().addClass('skillopen').next().addClass('skillopen').stop( true );
				$('#less').addClass('skillopen').next().addClass('skillopen').next().addClass('skillopen').next().addClass('skillopen').stop( true );
				});		
			});
		});
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
