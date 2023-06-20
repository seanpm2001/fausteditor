let gFaustLibSnippets = ['aa.clip', 'aa.Rsqrt', 'aa.Rlog', 'aa.Rtan', 'aa.Racos', 'aa.Rasin', 'aa.Racosh', 'aa.Rcosh', 'aa.Rsinh', 'aa.Ratanh', 'aa.ADAA1', 'aa.ADAA2', 'aa.hardclip', 'aa.hardclip2', 'aa.cubic1', 'aa.parabolic', 'aa.parabolic2', 'aa.hyperbolic', 'aa.hyperbolic2', 'aa.sinarctan', 'aa.sinarctan2', 'aa.tanh1', 'aa.arctan', 'aa.arctan2', 'aa.asinh1', 'aa.asinh2', 'aa.cosine1', 'aa.cosine2', 'aa.arccos', 'aa.arccos2', 'aa.acosh1', 'aa.acosh2', 'aa.sine', 'aa.sine2', 'aa.arcsin', 'aa.arcsin2', 'aa.tangent', 'aa.atanh1', 'aa.atanh2', 'an.abs_envelope_rect', 'an.abs_envelope_tau', 'an.abs_envelope_t60', 'an.abs_envelope_t19', 'an.amp_follower', 'an.amp_follower_ud', 'an.amp_follower_ar', 'an.ms_envelope_rect', 'an.ms_envelope_tau', 'an.ms_envelope_t60', 'an.ms_envelope_t19', 'an.rms_envelope_rect', 'an.rms_envelope_tau', 'an.rms_envelope_t60', 'an.rms_envelope_t19', 'an.zcr', 'an.mth_octave_analyzer', 'an.mth_octave_spectral_level6e', 'an.[third|half]_octave_[analyzer|filterbank]', 'an.analyzer', 'an.ifft', 'ba.samp2sec', 'ba.sec2samp', 'ba.db2linear', 'ba.linear2db', 'ba.lin2LogGain', 'ba.log2LinGain', 'ba.tau2pole', 'ba.pole2tau', 'ba.midikey2hz', 'ba.hz2midikey', 'ba.semi2ratio', 'ba.ratio2semi', 'ba.pianokey2hz', 'ba.hz2pianokey', 'ba.countdown', 'ba.countup', 'ba.sweep', 'ba.time', 'ba.ramp', 'ba.tempo', 'ba.period', 'ba.pulse', 'ba.pulsen', 'ba.cycle', 'ba.beat', 'ba.pulse_countup', 'ba.pulse_countdown', 'ba.pulse_countup_loop', 'ba.resetCtr', 'ba.pulse_countdown_loop', 'ba.count', 'ba.take', 'ba.subseq', 'ba.tabulate', 'ba.if', 'ba.selector', 'ba.select2stereo', 'ba.selectn', 'ba.selectmulti', 'ba.latch', 'ba.sAndH', 'ba.downSample', 'ba.peakhold', 'ba.peakholder', 'ba.impulsify', 'ba.automat', 'ba.bpf', 'ba.listInterp', 'ba.bypass1', 'ba.bypass2', 'ba.bypass1to2', 'ba.bypass_fade', 'ba.toggle', 'ba.on_and_off', 'ba.selectoutn', 'ba.slidingReduce', 'ba.slidingSum', 'ba.slidingSump', 'ba.slidingMax', 'ba.slidingMin', 'ba.slidingMean', 'ba.slidingMeanp', 'ba.slidingRMS', 'ba.slidingRMSp', 'ba.parallelOp', 'ba.parallelMax', 'ba.parallelMin', 'ba.parallelMean', 'ba.parallelRMS', 'co.peak_compression_gain_mono', 'co.peak_compression_gain_N_chan', 'co.FFcompressor_N_chan', 'co.FBcompressor_N_chan', 'co.FFFBcompressor_N_chan', 'co.RMS_compression_gain_mono', 'co.RMS_compression_gain_N_chan', 'co.RMS_FFFBcompressor_N_chan', 'co.RMS_FBcompressor_peak_limiter_N_chan', 'co.compressor_lad_mono', 'co.compressor_mono', 'co.compressor_stereo', 'co.compression_gain_mono', 'co.limiter_1176_R4_mono', 'co.limiter_1176_R4_stereo', 'co.limiter_lad_N', 'co.limiter_lad_mono', 'co.limiter_lad_stereo', 'co.limiter_lad_quad', 'co.limiter_lad_bw', 'de.delay', 'de.fdelay', 'de.sdelay', 'de.fdelay[n]', 'de.fdelay[n]a', 'dm.mth_octave_spectral_level_demo', 'dm.parametric_eq_demo', 'dm.spectral_tilt_demo', 'dm.cubicnl_demo', 'dm.gate_demo', 'dm.compressor_demo', 'dm.moog_vcf_demo', 'dm.wah4_demo', 'dm.crybaby_demo', 'dm.flanger_demo', 'dm.phaser2_demo', 'dm.freeverb_demo', 'dm.stereo_reverb_tester', 'dm.fdnrev0_demo', 'dm.zita_rev_fdn_demo', 'dm.zita_light', 'dm.zita_rev1', 'dm.dattorro_rev_demo', 'dm.jprev_demo', 'dm.greyhole_demo', 'dm.sawtooth_demo', 'dm.virtual_analog_oscillator_demo', 'dm.velvet_noise_demo', 'dm.latch_demo', 'dm.envelopes_demo', 'dm.fft_spectral_level_demo', 'dm.reverse_echo_demo(nChans)', 'dm.pospass_demo', 'dm.exciter', 'dm.vocoder_demo', 'dx.dx7_ampf', 'dx.dx7_egraterisef', 'dx.dx7_egraterisepercf', 'dx.dx7_egratedecayf', 'dx.dx7_egratedecaypercf', 'dx.dx7_eglv2peakf', 'dx.dx7_velsensf', 'dx.dx7_fdbkscalef', 'dx.dx7_op', 'dx.dx7_algo', 'dx.dx7_ui', 'en.smoothEnvelope', 'en.ar', 'en.arfe', 'en.are', 'en.asr', 'en.adsr', 'en.adsre', 'en.asre', 'en.dx7envelope', 'fd.model1D', 'fd.model2D', 'fd.stairsInterp1D', 'fd.stairsInterp2D', 'fd.linInterp1D', 'fd.linInterp2D', 'fd.stairsInterp1DOut', 'fd.stairsInterp2DOut', 'fd.linInterp1DOut', 'fd.stairsInterp2DOut', 'fd.route1D', 'fd.route2D', 'fd.schemePoint', 'fd.buildScheme1D', 'fd.buildScheme2D', 'fd.hammer', 'fd.bow', 'fi.zero', 'fi.pole', 'fi.integrator', 'fi.dcblockerat', 'fi.dcblocker', 'fi.lptN', 'fi.ff_comb', 'fi.ff_fcomb', 'fi.ffcombfilter', 'fi.fb_comb', 'fi.fb_fcomb', 'fi.rev1', 'fi.allpass_comb', 'fi.allpass_fcomb', 'fi.rev2', 'fi.iir', 'fi.fir', 'fi.notchw', 'fi.av2sv', 'fi.bvav2nuv', 'fi.iir_lat2', 'fi.allpassnt', 'fi.iir_kl', 'fi.allpassnklt', 'fi.iir_lat1', 'fi.allpassn1mt', 'fi.iir_nl', 'fi.allpassnnlt', 'fi.tf2np', 'fi.wgr', 'fi.nlf2', 'fi.apnl', 'fi.allpassn', 'fi.allpassnn', 'fi.allpasskl', 'fi.allpass1m', 'fi.tf3slf', 'fi.tf1s', 'fi.tf2sb', 'fi.tf1sb', 'fi.resonlp', 'fi.resonhp', 'fi.resonbp', 'fi.lowpass', 'fi.highpass', 'fi.lowpass0_highpass1', 'fi.lowpass3e', 'fi.lowpass6e', 'fi.highpass3e', 'fi.highpass6e', 'fi.bandpass', 'fi.bandstop', 'fi.bandpass6e', 'fi.bandpass12e', 'fi.pospass', 'fi.low_shelf', 'fi.high_shelf', 'fi.peak_eq', 'fi.peak_eq_cq', 'fi.peak_eq_rm', 'fi.spectral_tilt', 'fi.levelfilter', 'fi.levelfilterN', 'fi.mth_octave_filterbank[n]', 'fi.filterbank', 'fi.filterbanki', 'fi.svf', 'fi.avg_rect', 'ho.encoder', 'ho.decoder', 'ho.decoderStereo', 'ho.optimBasic', 'ho.optimMaxRe', 'ho.optimInPhase', 'ho.wider', 'ho.map', 'ho.rotate', 'ho.encoder3D', 'ho.optimBasic3D', 'ho.optimMaxRe3D', 'ho.optimInPhase3D', 'it.interpolate_linear', 'it.interpolate_cosine', 'it.interpolate_cubic', 'it.interpolator_two_points', 'it.interpolator_linear', 'it.interpolator_cosine', 'it.interpolator_two_points', 'it.interpolator_cubic', 'it.interpolator_select', 'ma.SR', 'ma.BS', 'ma.PI', 'ma.E', 'ma.EPSILON', 'ma.MIN', 'ma.INFINITY', 'ma.FTZ', 'ma.neg', 'ma.sub(x,y)', 'ma.inv', 'ma.cbrt', 'ma.hypot', 'ma.ldexp', 'ma.scalb', 'ma.log1p', 'ma.logb', 'ma.ilogb', 'ma.log2', 'ma.expm1', 'ma.acosh', 'ma.asinh', 'ma.atanh', 'ma.sinh', 'ma.cosh', 'ma.tanh', 'ma.erf', 'ma.erfc', 'ma.gamma', 'ma.lgamma', 'ma.J0', 'ma.J1', 'ma.Jn', 'ma.Y0', 'ma.Y1', 'ma.Yn', 'ma.np2', 'ma.frac', 'ma.modulo', 'ma.isnan', 'ma.isinf', 'ma.chebychev', 'ma.chebychevpoly', 'ma.diffn', 'ma.signum', 'ma.nextpow2', 'ma.zc', 'mi.initState', 'mi.mass', 'mi.oscil', 'mi.ground', 'mi.posInput', 'mi.spring', 'mi.damper', 'mi.springDamper', 'mi.nlSpringDamper2', 'mi.nlSpringDamper3', 'mi.nlSpringDamperClipped', 'mi.nlPluck', 'mi.nlBow', 'mi.collision', 'mi.nlCollisionClipped', 'ef.cubicnl', 'ef.gate_mono', 'ef.gate_stereo', 'ef.speakerbp', 'ef.piano_dispersion_filter', 'ef.stereo_width', 'ef.mesh_square', 'ef.reverseEchoN(nChans,delay)', 'ef.reverseDelayRamped(delay,phase)', 'ef.uniformPanToStereo(nChans)', 'ef.echo', 'ef.transpose', 'no.noise', 'no.multirandom', 'no.multinoise', 'no.noises', 'no.pink_noise', 'no.pink_noise_vm', 'no.sparse_noise_vm', 'no.velvet_noise_vm', 'no.gnoise', 'os.sinwaveform', 'os.coswaveform', 'os.phasor', 'os.hs_phasor', 'os.hsp_phasor', 'os.oscsin', 'os.hs_oscsin', 'os.osccos', 'os.oscp', 'os.osci', 'os.lf_imptrain', 'os.lf_pulsetrainpos', 'os.lf_pulsetrain', 'os.lf_squarewavepos', 'os.lf_squarewave', 'os.lf_trianglepos', 'os.lf_triangle', 'os.lf_rawsaw', 'os.lf_sawpos_phase', 'os.lf_sawpos', 'os.lf_sawpos_reset', 'os.lf_sawpos_phase_reset', 'os.lf_saw', 'os.sawNp', 'os.saw2dpw', 'os.saw3', 'os.sawtooth', 'os.saw2f2', 'os.saw2f4', 'os.pulsetrainN', 'os.pulsetrain', 'os.squareN', 'os.square', 'os.impulse', 'os.imptrainN', 'os.imptrain', 'os.triangleN', 'os.triangle', 'os.oscb', 'os.oscrq', 'os.oscrs', 'os.oscrc', 'os.oscs', 'os.osc', 'os.oscw', 'os.oscws', 'os.oscwq', 'os.oscw', 'os.CZsaw', 'os.CZsawP', 'os.CZsquare', 'os.CZsquareP', 'os.CZpulse', 'os.CZpulseP', 'os.CZsinePulse', 'os.CZsinePulseP', 'os.CZhalfSine', 'os.CZhalfSineP', 'os.CZresSaw', 'os.CZresTriangle', 'os.CZresTrap', 'os.polyblep', 'os.polyblep_saw', 'os.polyblep_square', 'os.polyblep_triangle', 'os.quadosc', 'pf.flanger_mono', 'pf.flanger_stereo', 'pf.phaser2_mono', 'pf.phaser2_stereo', 'pm.speedOfSound', 'pm.maxLength', 'pm.f2l', 'pm.l2f', 'pm.l2s', 'pm.basicBlock', 'pm.chain', 'pm.inLeftWave', 'pm.inRightWave', 'pm.in', 'pm.outLeftWave', 'pm.outRightWave', 'pm.out', 'pm.terminations', 'pm.lTermination', 'pm.rTermination', 'pm.closeIns', 'pm.closeOuts', 'pm.endChain', 'pm.waveguideN', 'pm.waveguide', 'pm.bridgeFilter', 'pm.modeFilter', 'pm.stringSegment', 'pm.openString', 'pm.nylonString', 'pm.steelString', 'pm.openStringPick', 'pm.openStringPickUp', 'pm.openStringPickDown', 'pm.ksReflexionFilter', 'pm.rStringRigidTermination', 'pm.lStringRigidTermination', 'pm.elecGuitarBridge', 'pm.elecGuitarNuts', 'pm.guitarBridge', 'pm.guitarNuts', 'pm.idealString', 'pm.ks', 'pm.ks_ui_MIDI', 'pm.elecGuitarModel', 'pm.elecGuitar', 'pm.elecGuitar_ui_MIDI', 'pm.guitarBody', 'pm.guitarModel', 'pm.guitar', 'pm.guitar_ui_MIDI', 'pm.nylonGuitarModel', 'pm.nylonGuitar', 'pm.nylonGuitar_ui_MIDI', 'pm.modeInterpRes', 'pm.modularInterpBody', 'pm.modularInterpStringModel', 'pm.modularInterpInstr', 'pm.modularInterpInstr_ui_MIDI', 'pm.bowTable', 'pm.violinBowTable', 'pm.bowInteraction', 'pm.violinBow', 'pm.violinBowedString', 'pm.violinNuts', 'pm.violinBridge', 'pm.violinBody', 'pm.violinModel', 'pm.violin_ui', 'pm.violin_ui_MIDI', 'pm.openTube', 'pm.reedTable', 'pm.fluteJetTable', 'pm.brassLipsTable', 'pm.clarinetReed', 'pm.clarinetMouthPiece', 'pm.brassLips', 'pm.fluteEmbouchure', 'pm.wBell', 'pm.fluteHead', 'pm.fluteFoot', 'pm.clarinetModel', 'pm.clarinetModel_ui', 'pm.clarinet_ui', 'pm.clarinet_ui_MIDI', 'pm.brassModel', 'pm.brassModel_ui', 'pm.brass_ui', 'pm.brass_ui_MIDI', 'pm.fluteModel', 'pm.fluteModel_ui', 'pm.flute_ui', 'pm.flute_ui_MIDI', 'pm.impulseExcitation', 'pm.strikeModel', 'pm.strike', 'pm.pluckString', 'pm.blower', 'pm.blower_ui', 'pm.djembeModel', 'pm.djembe', 'pm.djembe_ui_MIDI', 'pm.marimbaBarModel', 'pm.marimbaResTube', 'pm.marimbaModel', 'pm.marimba', 'pm.marimba_ui_MIDI', 'pm.churchBellModel', 'pm.churchBell', 'pm.churchBell_ui', 'pm.englishBellModel', 'pm.englishBell', 'pm.englishBell_ui', 'pm.frenchBellModel', 'pm.frenchBell', 'pm.frenchBell_ui', 'pm.germanBellModel', 'pm.germanBell', 'pm.germanBell_ui', 'pm.russianBellModel', 'pm.russianBell', 'pm.russianBell_ui', 'pm.standardBellModel', 'pm.standardBell', 'pm.standardBell_ui', 'pm.formantValues', 'pm.voiceGender', 'pm.skirtWidthMultiplier', 'pm.autobendFreq', 'pm.vocalEffort', 'pm.fof', 'pm.fofSH', 'pm.fofCycle', 'pm.fofSmooth', 'pm.formantFilterFofCycle', 'pm.formantFilterFofSmooth', 'pm.formantFilterBP', 'pm.formantFilterbank', 'pm.formantFilterbankFofCycle', 'pm.formantFilterbankFofSmooth', 'pm.formantFilterbankBP', 'pm.SFFormantModel', 'pm.SFFormantModelFofCycle', 'pm.SFFormantModelFofSmooth', 'pm.SFFormantModelBP', 'pm.SFFormantModelFofCycle_ui', 'pm.SFFormantModelFofSmooth_ui', 'pm.SFFormantModelBP_ui', 'pm.SFFormantModelFofCycle_ui_MIDI', 'pm.SFFormantModelFofSmooth_ui_MIDI', 'pm.SFFormantModelBP_ui_MIDI', 'pm.allpassNL', 'pm.modalModel', 'pl.SR', 'pl.tablesize', 'qu.quantize', 'qu.quantizeSmoothed', 'qu.ionian', 'qu.dorian', 'qu.phrygian', 'qu.lydian', 'qu.mixo', 'qu.eolian', 'qu.locrian', 'qu.pentanat', 'qu.kumoi', 'qu.natural', 'qu.dodeca', 'qu.dimin', 'qu.penta', 'rm.reduce', 'rm.reducemap', 're.jcrev', 're.satrev', 're.fdnrev0', 're.zita_rev_fdn', 're.zita_rev1_stereo', 're.zita_rev1_ambi', 're.mono_freeverb', 're.stereo_freeverb', 're.dattorro_rev', 're.dattorro_rev_default', 'ro.cross', 'ro.crossnn', 'ro.crossn1', 'ro.cross1n', 'ro.crossNM', 'ro.interleave', 'ro.butterfly', 'ro.hadamard', 'ro.recursivize', 'si.bus', 'si.block', 'si.interpolate', 'si.smoo', 'si.polySmooth', 'si.smoothAndH', 'si.bsmooth', 'si.dot', 'si.smooth', 'si.cbus', 'si.cmul', 'si.cconj', 'si.lag_ud', 'si.rev', 'so.loop', 'so.loop_speed', 'so.loop_speed_level', 'sp.panner', 'sp.spat', 'sp.stereoize', 'sy.popFilterPerc', 'sy.dubDub', 'sy.sawTrombone', 'sy.combString', 'sy.additiveDrum', 'sy.fm', 've.moog_vcf', 've.moog_vcf_2b[n]', 've.moogLadder', 've.moogHalfLadder', 've.diodeLadder', 've.korg35LPF', 've.korg35HPF', 've.oberheim', 've.oberheimBSF', 've.oberheimBPF', 've.oberheimHPF', 've.oberheimLPF', 've.sallenKeyOnePole', 've.sallenKeyOnePoleLPF', 've.sallenKeyOnePoleHPF', 've.sallenKey2ndOrder', 've.sallenKey2ndOrderLPF', 've.sallenKey2ndOrderBPF', 've.sallenKey2ndOrderHPF', 've.wah4', 've.autowah', 've.crybaby', 've.vocoder', 'vl.version', 'wd.resistor', 'wd.resistor_Vout', 'wd.resistor_Iout', 'wd.u_voltage', 'wd.u_current', 'wd.resVoltage', 'wd.resVoltage_Vout', 'wd.u_resVoltage', 'wd.resCurrent', 'wd.u_resCurrent', 'wd.u_switch', 'wd.capacitor', 'wd.capacitor_Vout', 'wd.inductor', 'wd.inductor_Vout', 'wd.u_idealDiode', 'wd.u_chua', 'wd.lambert', 'wd.u_diodePair', 'wd.u_diodeSingle', 'wd.u_diodeAntiparallel', 'wd.u_parallel2Port', 'wd.parallel2Port', 'wd.u_series2Port', 'wd.series2Port', 'wd.parallelCurrent', 'wd.seriesVoltage', 'wd.u_transformer', 'wd.transformer', 'wd.u_transformerActive', 'wd.transformerActive', 'wd.parallel', 'wd.series', 'wd.u_sixportPassive', 'wd.genericNode', 'wd.genericNode_Vout', 'wd.genericNode_Iout', 'wd.u_genericNode', 'wd.builddown', 'wd.buildup', 'wd.getres', 'wd.parres', 'wd.buildout', 'wd.buildtree', 'wa.lowpass2', 'wa.highpass2', 'wa.bandpass2', 'wa.notch2', 'wa.allpass2', 'wa.peaking2', 'wa.lowshelf2', 'wa.highshelf2'];

var gFaustKeyWords =
    "mem prefix int float rdtable rwtable select2 select3 ffunction fconstant fvariable route waveform soundfile button checkbox vslider hslider nentry vgroup hgroup tgroup vbargraph hbargraph attach acos asin atan atan2 cos sin tan exp log log10 pow sqrt abs min max fmod remainder floor ceil rint"
        .split(" ");

// split by first letter after prefix
var gFaustLibSnippetsArray = [];
for (var c = 0; c <= 255; c++) { gFaustLibSnippetsArray[c] = []; }

// the first 3 characters are the library prefix, therefore they are skipped.
for (var i = 0; i < gFaustLibSnippets.length; i++) {
    const w = gFaustLibSnippets[i];
    gFaustLibSnippetsArray[w.charCodeAt(3)].push(w);
}

// sort
for (var i = 0; i < gFaustLibSnippetsArray.length; i++) {
    gFaustLibSnippetsArray[i].sort();
}

Object.assign(window, { gFaustKeyWords, gFaustLibSnippetsArray });
