module.exports = ['$scope','$location', '$routeParams', '$modal',  function ($scope, $location, $routeParams, $modal) {
	$scope.about = false;
	$scope.burga = false;
	$scope.intro = true;
	$scope.skills = false;
	$scope.technical = false;
	$scope.creative = true;
	$scope.creativegraph = false;
	$scope.technicalgraph = false;
	$scope.creativegraphfast = false;
	$scope.philosophy = false;
	$scope.examplesView = false;
	$scope.wireframeView = false;
	$scope.mockupView = false;
	$scope.finishedView = false;
	$scope.wireframeimage1 = true;
	$scope.wireframeimage2 = false;
	$scope.wireframeimage3 = false;
	$scope.wireframeimage3 = false;


	$scope.skillOpen = function(){
		$('#skills').fadeIn(300);
		$('#skills').delay(10).queue(function(next){
			$('#skills').addClass("showSection");
			$('#skills').dequeue();
		});
		$('#illustrator').delay(600).queue(function(next){
			$('#illustrator').addClass('skillopen');
			$('#illustrator').dequeue();
		});
		$('#sketch').delay(800).queue(function(next){
			$('#sketch').addClass('skillopen');
			$('#sketch').dequeue();
		});
		$('#photoshop').delay(1000).queue(function(next){
			$('#photoshop').addClass('skillopen');
			$('#photoshop').dequeue();
		});
		$('#lucid').delay(1200).queue(function(next){
			$('#lucid').addClass('skillopen');
			$('#lucid').dequeue();
		});
		$('#balsamiq').delay(1400).queue(function(next){
			$('#balsamiq').addClass('skillopen');
			$('#balsamiq').dequeue();
		});
		$('#invision').delay(1600).queue(function(next){
			$('#invision').addClass('skillopen');
			$('#invision').dequeue();
		});
		$('#indesign').delay(1800).queue(function(next){
			$('#indesign').addClass('skillopen').finish();
			$('#indesign').dequeue();
		});
			console.log('first open circles');
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
				$('#technicalcirlcecontain').fadeOut(300);
			});
			
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
		
			
			$scope.technicalgraph = true;
			console.log('open graph tech close circles'); 
			console.log($scope.about);
		console.log($scope.burga, 'burga');
		console.log($scope.intro, 'intro');
		console.log($scope.skills, 'skills');
		console.log($scope.technical, 'technical');
		console.log($scope.creative, 'creative'); 
		console.log($scope.creativegraph, 'creativegraph');
		console.log($scope.technicalgraph, 'technicalgraph');
		return
	}
	$scope.closeGraphTech = function(){
		var technicalbar = $(".technicalbar");
		var skillopen = $( ".skillcircle" );
		var technicalbartext = $(".technicalbartext");
		$(technicalbartext).fadeOut(100);
		$(technicalbar).addClass('technicalbarclosed');
		$('#technicalx').fadeOut(200); 
		$('#technicalxy').fadeOut(200, function(){
			$('#technicalgraphbottom').removeClass('go');
			$('#technicalgraph').fadeOut(200, function(){
				$('#technicalskillcontain').removeClass('technicalgraphholder');
				$('#technicalcirlcecontain').fadeIn(300, function() {
					$('#html').addClass('skillopen').next().addClass('skillopen').next().addClass('skillopen').next().addClass('skillopen').next().addClass('skillopen').dequeue().clearQueue().finish();
					$('#less').addClass('skillopen').next().addClass('skillopen').next().addClass('skillopen').next().addClass('skillopen').dequeue().clearQueue().finish();
				});
			});
		});
		stop('fx', true, true);
		$scope.technicalgraph = false;
		console.log('close tech graph open circles');
	}
	$scope.openCircles =function (){
		if ($scope.technicalgraph === false) {
		var skillopen = $( ".skillcircle" );
		$('#creativecirlcecontain').fadeIn(300, function() {
			$(skillopen).removeClass('skillopen').delay(50).queue(function(next){
				$('#technicalskills').dequeue().fadeOut(300, function() {
					$('#creativeskills').fadeIn(50, function() {
						$('#illustrator').addClass('skillopen').next().addClass('skillopen').next().addClass('skillopen').next().addClass('skillopen').clearQueue().finish();
						$('#balsamiq').addClass('skillopen').next().addClass('skillopen').next().addClass('skillopen').clearQueue().finish();
					});		
				});
			});
		});
			stop('fx', true, true);
			$scope.creative = true;
			$scope.technical = false;
			$scope.technicalgraph = false;
			console.log('open creative circles');	
		}
		else if($scope.technicalgraph === true) {
			var technicalbar = $(".technicalbar");
			var skillopen = $( ".skillcircle" );
			var technicalbartext = $(".technicalbartext");
			$(technicalbartext).fadeOut(100);
			$(technicalbar).addClass('technicalbarclosed');
			$('#technicalx').fadeOut(200); 
			$('#technicalxy').fadeOut(200, function(){
				$('#technicalgraphbottom').removeClass('go');
				$('#technicalgraph').fadeOut(200, function(){
					$('#technicalskillcontain').removeClass('technicalgraphholder');
					$('#creativecirlcecontain').fadeIn(300, function() {
						$(skillopen).removeClass('skillopen').delay(50).queue(function(next){
							$('#technicalskills').dequeue().fadeOut(300, function() {
								$('#creativeskills').fadeIn(50, function() {
									$('#illustrator').addClass('skillopen').next().addClass('skillopen').next().addClass('skillopen').next().addClass('skillopen').clearQueue().finish();
									$('#balsamiq').addClass('skillopen').next().addClass('skillopen').next().addClass('skillopen').clearQueue().finish();
								});		
							});
						});
					});
				});
			});
			$scope.creative = true;
			$scope.technical = false;
			$scope.technicalgraph = false;
			console.log('open creative circles tech graph close');
			console.log($scope.about);
		console.log($scope.burga, 'burga');
		console.log($scope.intro, 'intro');
		console.log($scope.skills, 'skills');
		console.log($scope.technical, 'technical');
		console.log($scope.creative, 'creative'); 
		console.log($scope.creativegraph, 'creativegraph');
		console.log($scope.technicalgraph, 'technicalgraph');	
		}
	}
	$scope.openCirclesTech =function (){
		if ($scope.creativegraph === true ) {
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
						$('#creativeskills').fadeOut(300, function() {
							$('#technicalskills').fadeIn(50, function() {
								$('#technicalcirlcecontain').fadeIn(50, function() {
									$('#html').addClass('skillopen').next().addClass('skillopen').next().addClass('skillopen').next().addClass('skillopen').next().addClass('skillopen').clearQueue().finish();
									$('#less').addClass('skillopen').next().addClass('skillopen').next().addClass('skillopen').next().addClass('skillopen').clearQueue().finish();
								});
							});		
						});
					});
				});
			stop('fx', true, true);
			$scope.creative = false;
			$scope.technical = true;
			$scope.creativegraph = false;
			console.log('open tech circles closeGraph');	
			return
		}
		else if ($scope.creativegraph === false ) {
			var skillopen = $( ".skillcircle" );
			$(skillopen).removeClass('skillopen').delay(50).queue(function(next){
				$('#creativeskills').dequeue().fadeOut(300, function() {
					$('#technicalskills').fadeIn(50, function() {
						$('#technicalcirlcecontain').fadeIn(50, function() {
							$('#html').addClass('skillopen').next().addClass('skillopen').next().addClass('skillopen').next().addClass('skillopen').next().addClass('skillopen').clearQueue().finish();
							$('#less').addClass('skillopen').next().addClass('skillopen').next().addClass('skillopen').next().addClass('skillopen').clearQueue().finish();
						});	
					});		
				});
			});
			stop('fx', true, true);
			$scope.creative = false;
			$scope.technical = true;
			console.log('open tech circles');	
			console.log($scope.burga, 'burga');
		console.log($scope.intro, 'intro');
		console.log($scope.skills, 'skills');
		console.log($scope.technical, 'technical');
		console.log($scope.creative, 'creative'); 
		console.log($scope.creativegraph, 'creativegraph');
		console.log($scope.technicalgraph, 'technicalgraph');
			return
		}
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
	return
	}
	$scope.technicalOpen = function() {
		if($scope.creative === false && $scope.technical === true && $scope.technicalgraph === true ){
			$scope.closeGraphTech();
			return
		}
		else if($scope.creative === false && $scope.technical === true && $scope.technicalgraph === false ){
			$scope.openGraphTech();
			return
		}
		else if($scope.technical === false && $scope.technicalgraph === false){
			$scope.openCirclesTech();
			return
		}
	return
	}
	$scope.uxOpen = function(){
		$('#philosophy').fadeIn(300);
		$('#philosophy').delay(10).queue(function(next){
			$('#philosophy').addClass("showSection");
			$('#philosophy').dequeue();
		});
	}
	$scope.examplesOpen = function(){
		$('#examples').fadeIn(300);
		$('#examples').delay(10).queue(function(next){
			$('#examples').addClass("showSection");
			$('#examples').dequeue();
		});
	}
	$scope.viewOpen = function(){
		$('#workexamples').fadeIn(300);
	}
	$scope.nextImage = function(){
		if ($scope.wireframeimage1 === true){
			$('#balamiqwork').animate({
			    opacity: 0,
			    left: "-=2000",
			  });
			$('#lucidchart1').animate({
			    opacity: 1,
			    left: "-=2000",
			  });
				$scope.wireframeimage1 = false;
				$scope.wireframeimage2 = true;
				console.log('first' , $scope.wireframeimage1, 'image1');
		}
		else if($scope.wireframeimage2 === true){
			$('#lucidchart1').animate({
			    opacity: 0,
			    left: "-=2000",
			  });
			$('#lucidchart2').animate({
			    opacity: 1,
			    left: "-=2000",
			  });
				$scope.wireframeimage2 = false;
				$scope.wireframeimage3 = true;
				console.log('second');
		}
		else if($scope.wireframeimage3 === true){
			$('#lucidchart2').animate({
			    opacity: 0,
			    left: "-=2000",
			  });
			$('#wireframecopy').animate({
			    opacity: 1,
			    left: "-=2000",
			  });
				$scope.wireframeimage3 = false;
				$scope.wireframeimage4 = true;
				console.log('third');
		}
		else if($scope.wireframeimage4 === true){
			$scope.wireframeView = false;
			$('#workexamples').fadeOut(300, function(){
				$('#lucidchart2').animate({
			    opacity: 0,
			    left: "+=4000",
				});
				$('#wireframecopy').animate({
				    opacity: 0,
				    left: "+=2000",
				});
				$('#balamiqwork').animate({
				    opacity: 1,
				    left: "+=2000",
				  });
				$('#lucidchart1').animate({
				    opacity: 0,
				    left: "+=4000",
				  });
					$scope.wireframeimage4 = false;
					$scope.wireframeimage1 = true;
					console.log('close');
			});
		}
	}
	$scope.prevImage = function(){
		if ($scope.wireframeimage2 === true){
			$('#balamiqwork').animate({
			    opacity: 1,
			    left: "+=2000",
			  });
			$('#lucidchart1').animate({
			    opacity: 0,
			    left: "+=2000",
			  });
				$scope.wireframeimage1 = true;
				$scope.wireframeimage2 = false;
				console.log('first' , $scope.wireframeimage1, 'image1');
		}
		else if($scope.wireframeimage3 === true){
			$('#lucidchart1').animate({
			    opacity: 1,
			    left: "+=2000",
			  });
			$('#lucidchart2').animate({
			    opacity: 0,
			    left: "+=2000",
			  });
				$scope.wireframeimage2 = true;
				$scope.wireframeimage3 = false;
				console.log('second');
		}
		else if($scope.wireframeimage4 === true){
			$('#lucidchart2').animate({
			    opacity: 1,
			    left: "+=2000",
			  });
			$('#wireframecopy').animate({
			    opacity: 0,
			    left: "+=2000",
			  });
				$scope.wireframeimage3 = true;
				$scope.wireframeimage4 = false;
				console.log('third');
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
